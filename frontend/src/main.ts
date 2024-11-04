import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Importa las rutas desde app.routes.ts

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),      // Provee HttpClient
    provideRouter(routes)     // Provee Router con las rutas
  ]
}).catch(err => console.error(err));
