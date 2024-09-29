import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';  // Asegúrate de que la ruta sea correcta
import { Usuario } from 'src/app/models/bd.models'; // Importa el modelo de usuario
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent implements OnInit {
  nombreAlumno: string = '';
  email: string = '';
  telefono: string = '';
<<<<<<< HEAD
  rol: string='';
=======
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.usuarioCompleto$.subscribe((usuario: Usuario | null) => {
      if (usuario) {
        this.nombreAlumno = usuario.nombreCompleto;
        this.email = usuario.email;
        this.telefono = usuario.telefono;
<<<<<<< HEAD
        this.rol= usuario.rol;
=======
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
      }
    });
  }
    

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Llamamos al método de cerrar sesión del servicio de autenticación
  }
  irADetalle(asignatura: string) {
    this.router.navigate(['/detalle-asignatura-alumno', { asignatura }]); // Navegación con el parámetro
  }
}
