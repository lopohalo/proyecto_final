import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
    selector: 'app-citas',
    templateUrl: './citas.component.html',
    styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
    ControlCitas: FormGroup
    revisarCorreo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    GuardarCitas: any
    pepe: any
    popo: any
    id: any | null
    @ViewChild('registrarse') registrarseHTML?: ElementRef
    @ViewChild('editar') editar?: ElementRef

    constructor(private fb: FormBuilder, private renderer2: Renderer2) {
        this.ControlCitas = fb.group({
            documento: ['', Validators.compose([
                Validators.required,
                Validators.minLength(9),
                Validators.maxLength(10),
            ])],
            nombre: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(this.revisarCorreo)]],
            fecha: ['', Validators.required],
            sintomas: ['', Validators.required]
        })

    }
    generadoraID() {

        let random = Math.random().toString(36).substring(2);
        let fecha = Date.now().toString(36)
        return random + fecha;
    }
    Trayendoobjeto(obj: any) {
        const registrar = this.registrarseHTML?.nativeElement
        this.renderer2.setAttribute(registrar, 'value', 'Editar Cita')
        this.ControlCitas.setValue({
            documento: obj.documento,
            nombre: obj.nombre,
            email: obj.email,
            fecha: obj.fecha,
            sintomas: obj.sintomas
        })
        this.id = obj.id
    }
    Elimiando(id: any) {
        console.log(id)
        this.id = id
        Swal.fire({
            title: 'Esta Seguro?',
            text: "Esta accion no sea reversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminalo!'
        }).then((result) => {
            if (result.isConfirmed) {
                const nuevoarreglo = this.pepe.filter((arregloViejo: any) => arregloViejo.id !== this.id)
                this.GuardarCitas = nuevoarreglo
                localStorage.setItem('citas', JSON.stringify(this.GuardarCitas))
                this.id = null
                this.popo = localStorage.getItem('citas')
                this.pepe = JSON.parse(this.popo)
                Swal.fire(
                    'Eliminado!',
                    'Se ha eliminado correctamente.',
                    'success'
                )
            }
        })
    }
    enviarDatos() {
        const registrar = this.registrarseHTML?.nativeElement

        let citas = {
            documento: this.ControlCitas.get('documento')?.value,
            nombre: this.ControlCitas.get('nombre')?.value,
            email: this.ControlCitas.get('email')?.value,
            fecha: this.ControlCitas.get('fecha')?.value,
            sintomas: this.ControlCitas.get('sintomas')?.value,
            id: ''
        }
        console.log(citas)
        let recogiendo: any = localStorage.getItem('citas')
        let recogido: any = JSON.parse(recogiendo)
        if (recogido == null) {
            this.GuardarCitas = []
        } else {
            this.GuardarCitas = recogido
        }

        if (this.id == null) {
            citas.id = this.generadoraID()
            this.GuardarCitas.push(citas)
            console.log(citas)
        } else {
            citas.id = this.id
            const nuevoArreglo = this.GuardarCitas.map((viejoArreglo: any) => viejoArreglo.id === this.id ? citas : viejoArreglo)
            this.GuardarCitas = nuevoArreglo
            this.id = null
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se ha editado correctamento',
                showConfirmButton: false,
                timer: 1500
            })
            this.renderer2.setAttribute(registrar, 'value', 'Registrarse')
        }
        localStorage.setItem('citas', JSON.stringify(this.GuardarCitas))
        this.popo = localStorage.getItem('citas')
        this.pepe = JSON.parse(this.popo)
        this.ControlCitas.reset()
    }

    ngOnInit(): void {
        if(localStorage.getItem('citas')){
            this.popo = localStorage.getItem('citas')
            this.pepe = JSON.parse(this.popo)
        }else{
            localStorage.setItem('citas', '[]')
        }

    }

}
