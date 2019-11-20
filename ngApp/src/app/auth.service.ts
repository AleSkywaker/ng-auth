import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'localhost:3000/api/register';
  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http.post(this.registerUrl, user);
  }
}
