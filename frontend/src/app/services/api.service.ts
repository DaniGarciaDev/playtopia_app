import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000/check-db'; // URL de tu backend

  constructor(private http: HttpClient) { }

  checkDatabaseConnection(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
