import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      // Manejar error de login
      console.error('Inicio de sesión fallido');
    }
  }

  goToRecoverPassword() {
    this.router.navigate(['/recuperar-contrasenia']);
  }
}