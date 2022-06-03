import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    @ViewChild('password') passwordHTML?: ElementRef;
    @ViewChild('password1') password1HTML?: ElementRef;
    @ViewChild('boton') btnHTML?: ElementRef;
    @ViewChild('img') imgHTML?: ElementRef;
    @ViewChild('img2') img2HTML?: ElementRef;
    @ViewChild('name') nameHTML?: ElementRef;
    @ViewChild('lastname') lastnameHTML?: ElementRef;
    @ViewChild('email') emailHTML?: ElementRef;
    @ViewChild('number') numberHTML?: ElementRef;

    constructor(private renderer2: Renderer2) { }

    ngOnInit(): void {
    }

    cambio1() {
        const elemento = this.passwordHTML?.nativeElement;
        const imagen = this.imgHTML?.nativeElement;
        const juan = elemento.dataset.muestraj;
        if(juan == 'false'){
            this.renderer2.setAttribute(elemento, 'type', 'text');
            this.renderer2.setAttribute(elemento, 'data-muestraj', 'true');
            this.renderer2.setAttribute(imagen, 'src', './assets/img/eye-solid.svg');

        }else{
            this.renderer2.setAttribute(elemento, 'type', 'password');
            this.renderer2.setAttribute(elemento, 'data-muestraj', 'false');
            this.renderer2.setAttribute(imagen, 'src', './assets/img/eye-slash-solid.svg');
        }
    }
    cambio2() {
        const elemento2 = this.password1HTML?.nativeElement;
        const imagen2 = this.img2HTML?.nativeElement;
        const juan2 = elemento2.dataset.muestrak;
        if(juan2 == 'false'){
            this.renderer2.setAttribute(elemento2, 'type', 'text');
            this.renderer2.setAttribute(elemento2, 'data-muestrak', 'true');
            this.renderer2.setAttribute(imagen2, 'src', './assets/img/eye-solid.svg');

        }else{
            this.renderer2.setAttribute(elemento2, 'type', 'password');
            this.renderer2.setAttribute(elemento2, 'data-muestrak', 'false');
            this.renderer2.setAttribute(imagen2, 'src', './assets/img/eye-slash-solid.svg');
        }
    }

    cambio3(){
        const name1 = this.nameHTML?.nativeElement;
        const lastname1 = this.lastnameHTML?.nativeElement;
        const email1 = this.emailHTML?.nativeElement;
        const number1 = this.numberHTML?.nativeElement;
        const dataname = name1.dataset.name;
        const datalastname = lastname1.dataset.lastname;
        const dataemail1 = email1.dataset.email;
        const datanumber1 = number1.dataset.number;
        if(dataname == 'false'){
            this.renderer2.setStyle
        }


    }


}

