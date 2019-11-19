import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData: User = {
    email: '',
    password: ''
  };
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
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
  enviar() {
    console.log('it works');
  }

  ngOnInit() {}

  registerUser() {
    console.log(this.registerUserData);
  }
}
