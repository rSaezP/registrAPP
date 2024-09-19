import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() { }

  login(username: string, password: string) {
    //simulando autenticación
    if (username && password) {
      this.isAuthenticated.next(true);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated.next(false);
  }

  isAuthenticatedUser() {
    return this.isAuthenticated.asObservable();
  }

  recoverPassword(username: string) {
    //logica para recuperar contraseña
    console.log('Recuperando contraseña para:', username);
    return true;
  }
}