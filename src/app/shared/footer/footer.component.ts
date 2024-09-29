<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
=======
// header.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service'; // Ajusta la ruta si es necesario
import { Router } from '@angular/router';
>>>>>>> master

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
<<<<<<< HEAD
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

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


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirigir a la página de login
  }
>>>>>>> master
}
