import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.formulario = fb.group(
      {
        email: [null, Validators.required],
        password: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        password2: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        terminos: [null, Validators.compose([Validators.required, Validators.requiredTrue])]
      },
      { validator: this.checkPasswords }
    );
  }
  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.password2.value;
    return pass === confirmPass ? null : { notSAme: true };
  }
  enviar(user) {
    console.log('it works', user);
    this.auth.registerUser(user).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  ngOnInit() {}
}
