import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-citas',
    templateUrl: './citas.component.html',
    styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
    ControlCitas: FormGroup
    revisarCorreo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    GuardarCitas: any
    pepe:any
    popo:any
    constructor(private fb: FormBuilder) {
        this.ControlCitas = fb.group({
            documento: ['', Validators.compose([
                Validators.required,
                Validators.minLength(9),
                Validators.maxLength(10),
            ])],
            nombre: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(this.revisarCorreo)]],
            fecha: ['', Validators.required],
            sintomas: ['',Validators.required]
        })

    }
    generadoraID (){
        let random = Math.random().toString(36).substring(2);
        let fecha = Date.now().toString(36)
        return random + fecha;
    }
    enviarDatos(){                                                                                     
        let citas = {
            documento: this.ControlCitas.get('documento')?.value,
            nombre: this.ControlCitas.get('nombre')?.value,
            email: this.ControlCitas.get('email')?.value,
            fecha: this.ControlCitas.get('fecha')?.value,
            sintomas: this.ControlCitas.get('sintomas')?.value,
            id: this.generadoraID()
        }
        console.log(citas)
        let recogiendo: any = localStorage.getItem('citas')
        let recogido: any = JSON.parse(recogiendo)
        if(recogido == null){
            this.GuardarCitas = []
        } else {
            this.GuardarCitas = recogido
        }
            this.GuardarCitas.push(citas)

            localStorage.setItem('citas', JSON.stringify(this.GuardarCitas))
            this.popo = localStorage.getItem('citas')
            this.pepe =JSON.parse(this.popo)
            this.ControlCitas.reset()
    }

    ngOnInit(): void {
        this.popo = localStorage.getItem('citas')
        this.pepe =JSON.parse(this.popo)
    }

}
// this.contactoForm.setValue({
//     correo: data.correo,
//     nombre: data.nombre,
//     direccion: data.direccion,
//     ciudad: data.ciudad,
//     mensaje: data.mensaje,
//     edad: data.edad
// })
