import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    VerificarIdentidad: any
    constructor() { }


    ngOnInit(): void {
        if(localStorage.getItem('Nombre') == '[]') {
            localStorage.setItem('Nombre', '[]')
        }
        const verificar:any = localStorage.getItem('Nombre')
        this.VerificarIdentidad = JSON.parse(verificar)
        console.log(this.VerificarIdentidad)
    }


}
