import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData: User;
  constructor() {}

  ngOnInit() {}

  registerUser() {
    console.log(this.registerUserData);
  }
}
