import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';  // Asegúrate de que la ruta sea correcta
import { Usuario } from 'src/app/models/bd.models'; // Importa el modelo de usuario
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
})
export class DocenteComponent implements OnInit {
  nombreDocente: string = '';
  email: string = '';
  telefono: string = '';
<<<<<<< HEAD
  rol: string = '';
=======
<<<<<<< HEAD
  rol: string = '';
=======
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb

  constructor(private authService: AuthService,  private router: Router) {}

  ngOnInit() {
    this.authService.usuarioCompleto$.subscribe((usuario: Usuario | null) => {
      if (usuario) {
        this.nombreDocente = usuario.nombreCompleto;
        this.email = usuario.email;
        this.telefono = usuario.telefono;
<<<<<<< HEAD
        this.rol = usuario.rol;
=======
<<<<<<< HEAD
        this.rol = usuario.rol;
=======
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb
      }
    });
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']);// Llamamos al método de cerrar sesión del servicio de autenticación
  }

  irADetalle(asignatura: string) {
    this.router.navigate(['/detalle-asignatura-docente', { asignatura }]); // Navegación con el parámetro
  }
}

