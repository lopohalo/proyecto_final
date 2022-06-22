import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './components/citas/citas.component';
import { ControlComponent } from './components/control/control.component';
import { DatosContactoComponent } from './components/datos-contacto/datos-contacto.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
    { path: "citas", component: CitasComponent },
    { path: "registro", component: RegistroComponent },
    { path: "datos", component: DatosContactoComponent },
    { path: "nosotros", component: NosotrosComponent},
    {path:"control", component: ControlComponent},
    { path: "", component:HomeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
