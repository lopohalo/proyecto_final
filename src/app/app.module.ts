import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
declarations: [
    AppComponent,
    HomeComponent,
    EmpresasComponent,
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
