import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


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
    FormsModule
  ]
})
export class PagesModule { }
