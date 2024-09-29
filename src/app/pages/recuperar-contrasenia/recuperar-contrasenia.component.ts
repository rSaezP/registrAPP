import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';




@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, FooterComponent,HeaderComponent]

})
export class RecuperarContraseniaComponent  implements OnInit {
  email: string = '';
  username: string = '';

  constructor(private router: Router) { }



  ngOnInit() {
    console.log('RecuperarContraseniaComponent initialized');
  }


  recoverPassword() {
    // Add your logic here to recover the password
    console.log('Recover password function called');


    this.router.navigate(['/login']);
  }



}
