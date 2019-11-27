import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public user: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.user = fb.group({
      email: [null, Validators.required],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ]
    });
  }

  ngOnInit() {}

  entrar(usuario: any) {
    console.log(usuario);
    this.auth.loginUser(usuario).subscribe(
      res => {
        console.log("Entro con usuario", res);

        localStorage.setItem("token", res.token);
      },
      err => console.log(err),
      () => console.log("completed!!!")
    );
  }
}
