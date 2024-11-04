import { Component } from '@angular/core';
import { AuthService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.name, this.email, this.password).subscribe(
      (response) => {
        console.log(response.message); // Muestra mensaje de éxito
        this.router.navigate(['/login']); // Redirige al inicio de sesión tras registro
      },
      (error) => {
        this.errorMessage = 'Error en el registro. Inténtalo de nuevo.'; // Muestra error
        console.error('Error en el registro:', error);
      }
    );
  }
}
