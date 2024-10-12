import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Elimina HttpClientModule de aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  databaseStatus: string = ''; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.checkDatabaseConnection().subscribe(
      response => {
        this.databaseStatus = response.message; // Mostramos el mensaje de la API
      },
      error => {
        this.databaseStatus = 'Error al conectar con la base de datos';
      }
    );
  }
}
