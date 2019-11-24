import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private librosUrl = 'http://localhost:3000/api/libros';
  private librosProUrl = 'http://localhost:3000/api/librosPro';
  constructor(private http: HttpClient) {}
  getLibros() {
    return this.http.get<any>(this.librosUrl);
  }
  getLibrosPro() {
    return this.http.get<any>(this.librosProUrl);
  }
}
