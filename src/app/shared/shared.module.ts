import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { IonicModule } from '@ionic/angular'; // Añade esta importación
=======
>>>>>>> master
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';

<<<<<<< HEAD

@NgModule({
  declarations: [

    HeaderComponent,
    FooterComponent




  ],
  imports: [
    CommonModule,
    RouterLink,
    IonicModule // Añade IonicModule aquí
  ],
  exports: [
    HeaderComponent,
    FooterComponent,


=======
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent
>>>>>>> master
  ]
})
export class SharedModule { }
