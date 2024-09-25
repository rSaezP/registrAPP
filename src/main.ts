import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Asegúrate de que tus rutas estén bien configuradas

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})), // Importa el módulo de Ionic
    provideRouter(routes), // Define tus rutas
  ],
});
