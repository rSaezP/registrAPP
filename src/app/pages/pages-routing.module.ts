import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recuperar-contrasena', component: RecuperarContraseniaComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
