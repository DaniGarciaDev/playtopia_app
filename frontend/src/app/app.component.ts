import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AuthService } from './services/api.service'; // Comenta esta línea si no es necesario

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  databaseStatus: string = ''; 

  constructor() {} // Quita el servicio del constructor si no es necesario

  ngOnInit() {
    // Comenta o elimina el código de verificación de la base de datos temporalmente
    // this.authService.checkDatabaseConnection().subscribe(
    //   (response: any) => { 
    //     this.databaseStatus = response.message; 
    //   },
    //   (error: any) => { 
    //     this.databaseStatus = 'Error al conectar con la base de datos';
    //   }
    // );
  }
}
