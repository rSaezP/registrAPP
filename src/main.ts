import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Asegúrate de que tus rutas estén bien configuradas
=======
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
>>>>>>> master

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
<<<<<<< HEAD
    importProvidersFrom(IonicModule.forRoot({})), // Importa el módulo de Ionic
    provideRouter(routes), // Define tus rutas
=======
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
>>>>>>> master
  ],
});
