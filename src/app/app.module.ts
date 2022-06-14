import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DatosContactoComponent } from './components/datos-contacto/datos-contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { CitasComponent } from './components/citas/citas.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    DatosContactoComponent,
    EmpresasComponent,
    CitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
