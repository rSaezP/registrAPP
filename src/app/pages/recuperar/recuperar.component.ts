import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss'],
})
export class RecuperarComponent  implements OnInit {
  email: string = ''; // Inicializa la variable

  constructor(private router: Router) {}

  enviarSolicitud() {
    // Aquí puedes realizar otras acciones necesarias antes de redirigir
    this.email = ''; // Limpia el campo de email
    this.router.navigate(['/login']); // Redirige a login
  }
  volver() {
    this.router.navigate(['/login']); // Redirigir a la pantalla de docente
  }

  // Método para validar el email

  ngOnInit() {}

}
