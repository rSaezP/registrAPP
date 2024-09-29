import { Routes } from '@angular/router';

export const routes: Routes = [
  {
<<<<<<< HEAD
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'recuperar-contrasenia',
    loadComponent: () => import('./pages/recuperar-contrasenia/recuperar-contrasenia.component').then((m) => m.RecuperarContraseniaComponent),
=======
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
>>>>>>> master
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
<<<<<<< HEAD
  {
    path: '**',
    redirectTo: 'login',
  },
=======
>>>>>>> master
];
