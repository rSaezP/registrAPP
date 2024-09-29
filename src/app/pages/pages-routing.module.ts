import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recuperar-contrasena', component: RecuperarContraseniaComponent},

=======
import { RecuperarComponent } from './recuperar/recuperar.component';
import { DocenteComponent } from './docente/docente.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AsigDocenteComponent } from './asig-docente/asig-docente.component';
import { AsigAlumnoComponent } from './asig-alumno/asig-alumno.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar-contraseña', component: RecuperarComponent },
  { path: 'docente', component: DocenteComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'detalle-asignatura-docente', component: AsigDocenteComponent },
  { path: 'detalle-asignatura-alumno', component: AsigAlumnoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
