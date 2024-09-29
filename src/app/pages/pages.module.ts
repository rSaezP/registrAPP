<<<<<<< HEAD
import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { LoginComponent } from './login/login.component';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RecuperarContraseniaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule,
    FormsModule,
    SharedModule
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { DocenteComponent } from './docente/docente.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AsigDocenteComponent } from './asig-docente/asig-docente.component';
import { AsigAlumnoComponent } from './asig-alumno/asig-alumno.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RecuperarComponent,
    DocenteComponent,
    AlumnoComponent,
    AsigDocenteComponent,
    AsigAlumnoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesRoutingModule,
    SharedModule, // Importar el módulo SharedModule para reutilizar componentes comunes en todos los módulos
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb
  ]
})
export class PagesModule { }
