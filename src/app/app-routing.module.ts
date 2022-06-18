import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './components/citas/citas.component';
import { DatosContactoComponent } from './components/datos-contacto/datos-contacto.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
    { path: "citas", component: CitasComponent },
    { path: "registro", component: RegistroComponent },
    { path: "datos", component: DatosContactoComponent },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
