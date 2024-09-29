import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-asig-docente',
  templateUrl: './asig-docente.component.html',
  styleUrls: ['./asig-docente.component.scss'],
})
export class AsigDocenteComponent  implements OnInit {
  asignatura: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.asignatura = params.get('asignatura') || 'Asignatura no definida'; // Obtener el valor del parámetro asignatura
    });
  }
  simularGenerarQR() {
    console.log('Simulación: Código QR generado.');
    // Aquí podrías mostrar una alerta o algo visual si lo deseas
  }

logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirigir al login después de cerrar sesión
  }
  volver() {
    this.router.navigate(['/docente']); // Redirigir a la pantalla de docente
  }
}
