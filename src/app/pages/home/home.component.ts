import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderComponent, FooterComponent]
})
export class HomeComponent {
  public userName: string = '';

  constructor(private authService: AuthService, private navCtrl: NavController) {
    this.authService.isAuthenticatedUser().subscribe(isAuth => {
      if (!isAuth) {
        this.navCtrl.navigateRoot('/login'); // Redirige si no está autenticado
      }
    });

    this.authService.getUserName().subscribe((username) => {
      this.userName = username;
      console.log('User Name:', username);
    });
  }

  public navigateToSomePage() {
    this.navCtrl.navigateForward('/some-page');
  }
}

