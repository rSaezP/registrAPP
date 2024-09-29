import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string>('');

  constructor() { }

  login(username: string, password: string): boolean {
    console.log(`Intentando iniciar sesión con usuario: ${username}`);
    if (username === 'user' && password === 'pass') {
      this.isAuthenticated.next(true);
      this.userName.next(username);
      console.log('Login exitoso');
      return true;
    }
    console.log('Login fallido');
    return false;
  }
  logout() {
    this.isAuthenticated.next(false);
    this.userName.next(''); // Limpia el nombre de usuario
  }

  isAuthenticatedUser() {
    return this.isAuthenticated.asObservable();
  }
  getUserName() {
    return this.userName.asObservable();
  }

  recoverPassword(username: string) {
    //logica para recuperar contraseña
    console.log('Recuperando contraseña para:', username);
    return true;
  }
}
