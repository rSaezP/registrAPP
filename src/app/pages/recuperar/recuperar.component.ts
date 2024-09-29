import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD

=======
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss'],
})
<<<<<<< HEAD
export class RecuperarComponent implements OnInit {
  email: string = ''; // Inicializa la variable
  errorMessage: string = ''; // Mensaje de error
  successMessage: string = ''; // Mostrar mensaje éxito

  constructor(private router: Router) {}

  enviarSolicitud() {
    // Resetear mensajes
    this.errorMessage = '';
    this.successMessage = '';

    // Validar si el email es válido
    if (this.validateEmail(this.email)) {
      // Aquí puedes realizar otras acciones necesarias antes de redirigir
      this.successMessage = 'Solicitud enviada correctamente'; // Mensaje de éxito en pantalla
      this.email = ''; // Limpia el campo de email
      // Redirige a login después de un tiempo (opcional)
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000); // Redirige después de 3 segundos
    } else {
      this.errorMessage = 'Por favor, ingresa un email válido.'; // Mensaje de error en pantalla
    }
  }

  volver() {
    this.router.navigate(['/login']); // Redirigir a la pantalla de login
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

=======
export class RecuperarComponent  implements OnInit {
  email: string = ''; // Inicializa la variable
<<<<<<< HEAD
=======
  errorMessage: string = ''; // mesanje de error
  successMessage: string = ''; // mostrar mensaje exito
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893

  constructor(private router: Router) {}

  enviarSolicitud() {
<<<<<<< HEAD
    // Aquí puedes realizar otras acciones necesarias antes de redirigir
    this.email = ''; // Limpia el campo de email
    this.router.navigate(['/login']); // Redirige a login
  }
  volver() {
    this.router.navigate(['/login']); // Redirigir a la pantalla de docente
  }

=======
    // Resetear mensajes
    this.errorMessage = '';
    this.successMessage = '';

    // Validar si el email es válido
    if (this.validateEmail(this.email)) {
      // Aquí puedes realizar otras acciones necesarias antes de redirigir
      this.successMessage = 'Solicitud enviada correctamente'; // Mensaje de éxito en pantalla
      this.email = ''; // Limpia el campo de email
      // Redirige a login después de un tiempo (opcional)
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000); // Redirige después de 3 segundos
    } else {
      this.errorMessage = 'Por favor, ingresa un email válido.'; // Mensaje de error en pantalla
    }
  }

  validateEmail(email: string): boolean {
   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return re.test(email);
 }



>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
  // Método para validar el email
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb

  ngOnInit() {}
}

