import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private registerUrl = "http://localhost:3000/api/register";
  private loginUrl = "http://localhost:3000/api/login";
  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user: User) {
    return this.http.post<any>(this.loginUrl, user);
  }
  loggedIn(): boolean {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
