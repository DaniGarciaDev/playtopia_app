import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';  // Usa provideHttpClient en lugar de HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]  // Provee HttpClient aquí
}).catch(err => console.error(err));
