import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Añade esta importación
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';


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


  ]
})
export class SharedModule { }
