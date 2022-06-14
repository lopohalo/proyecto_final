import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-datos-contacto',
    templateUrl: './datos-contacto.component.html',
    styleUrls: ['./datos-contacto.component.css']
})
export class DatosContactoComponent implements OnInit {
    Controlmedico: FormGroup
    objetoDeControlMedico: any
    constructor(private fb: FormBuilder) {
        this.Controlmedico = fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            edad: ['', Validators.required],
            genero: ['', Validators.required],
            tipo: ['', Validators.required],
            celular: ['', Validators.required],
            comienzo: ['', Validators.required],
            sintomas: ['', Validators.required],
            tratamiento: ['', Validators.required],
            medicamento1: [''],
            medicamento2: [''],
            medicamento3: [''],
            tipoD: [''],

        })
    }
    enviardatos() {
         this.objetoDeControlMedico = [{
            nombre: this.Controlmedico.get('nombre')?.value,
            apellido: this.Controlmedico.get('apellido')?.value,
            tipo: this.Controlmedico.get('tipo')?.value,
            tratamiento: this.Controlmedico.get('tratamiento')?.value,
            tipoD: this.Controlmedico.get('tipoD')?.value,
            medicamento1: this.Controlmedico.get('medicamento1')?.value,
            medicamento2: this.Controlmedico.get('medicamento2')?.value,
            medicamento3: this.Controlmedico.get('medicamento3')?.value
    }]

    }
    ngOnInit(): void {
    }

}
