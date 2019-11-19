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
  constructor(private fb: FormBuilder) {}
  enviar() {
    console.log('it works');
  }

  ngOnInit() {}

  registerUser() {
    console.log(this.registerUserData);
  }
}
