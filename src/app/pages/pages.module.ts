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
  ]
})
export class PagesModule { }
