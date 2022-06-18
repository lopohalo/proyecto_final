import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../../models/contacto'

@Injectable({
  providedIn: 'root'
})
export class Contacto1Service {

    url_api = 'http://localhost:4000/api';

    constructor( private http: HttpClient ) { }

    getContactos(): Observable<any>{
        return this.http.get(`${this.url_api}/obtener-lista-contactos`)
    }

    getContacto(id:String): Observable<any>{
        return this.http.get(`${this.url_api}/obtener-contacto/${id}`)
    }

    postContacto(contactoFormulario: Contacto):Observable<any>{
        return this.http.post(`${this.url_api}/`, contactoFormulario)
    }

    putContacto(id:any, contactoFormulario: Contacto): Observable<any>{
        return this.http.put(`${this.url_api}/actualizar-contacto/${id}`, contactoFormulario)
    }

    deleteContacto(id:String):Observable<any>{
        return this.http.delete(`${this.url_api}/borrar-contacto/${id}`)
    }

}