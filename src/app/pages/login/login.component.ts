
import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, HeaderComponent, FooterComponent]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    console.log('Datos ingresados: ', this.username, this.password); // Verifica los datos ingresados
    const isAuthenticated = this.authService.login(this.username, this.password);
    console.log('Autenticación exitosa:', isAuthenticated); // Verifica si autenticación es true

    if (isAuthenticated) {
      console.log('Redirigiendo a home'); // Verifica si esta línea se ejecuta
      this.router.navigate(['/home']);
    } else {
      console.error('Inicio de sesión fallido');
    }
  }

  goToRecoverPassword() {
    this.router.navigate(['/recuperar-contrasenia']);
  }
}
