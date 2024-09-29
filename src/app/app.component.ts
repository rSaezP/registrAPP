<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from './services/auth.service'; // Asegúrate de la ruta correcta
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
=======
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
>>>>>>> master

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
<<<<<<< HEAD
  imports: [IonicModule, CommonModule, RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isAuthenticatedUser().subscribe(isAuth => {
      if (isAuth) {
        this.router.navigate(['/home']); // Redirigir al home si está autenticado
      } else {
        this.router.navigate(['/login']); // Redirigir al login si no está autenticado
      }
    });
  }
}

=======
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
>>>>>>> master
