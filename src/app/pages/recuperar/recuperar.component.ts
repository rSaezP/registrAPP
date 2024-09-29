import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss'],
})
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

  ngOnInit() {}

}
