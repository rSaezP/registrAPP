<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
=======
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb
// header.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service'; // Ajusta la ruta si es necesario
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
<<<<<<< HEAD
  styleUrls: ['./footer.component.scss']
=======
<<<<<<< HEAD
  styleUrls: ['./footer.component.scss']
=======
<<<<<<< HEAD
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb
})
export class FooterComponent {
  isAuthenticated: boolean = false;
  rol: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthenticated$.subscribe(auth => {
      this.isAuthenticated = auth;
    });
    
    this.authService.usuarioCompleto$.subscribe(usuario => {
      this.rol = usuario?.rol || null;
    });
  }
  navigateToInicio() {
    if (this.rol === 'docente') {
      this.router.navigate(['/docente']); // Cambia esto por la ruta de inicio para docentes
    } else if (this.rol === 'alumno') {
      this.router.navigate(['/alumno']); // Cambia esto por la ruta de inicio para alumnos
    }
  }


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isAuthenticated: boolean = false;
  rol: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthenticated$.subscribe(auth => {
      this.isAuthenticated = auth;
    });
    
    this.authService.usuarioCompleto$.subscribe(usuario => {
      this.rol = usuario?.rol || null;
    });
  }
  navigateToInicio() {
    if (this.rol === 'docente') {
      this.router.navigate(['/docente']); // Cambia esto por la ruta de inicio para docentes
    } else if (this.rol === 'alumno') {
      this.router.navigate(['/alumno']); // Cambia esto por la ruta de inicio para alumnos
    }
  }


>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirigir a la página de login
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 97ec2fe628058363aab92a99f65762d4beaf4893
>>>>>>> e3e060ae0ffed17be41e8e1d5740816d2a6cdadb
}
