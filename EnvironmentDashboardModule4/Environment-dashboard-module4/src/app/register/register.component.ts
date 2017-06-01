import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName : string;
  lastName : string;
  userName : string;
  password : string;
  repeatedPassword : string;
  email : string;
  phoneNumber : string;

  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.firstName + " " + this.lastName + " " + this.userName + " " + this.password + " " +
    this.repeatedPassword + " " + this.email + " " + this.phoneNumber);
    /*
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.pasword = password;
    this.repeatedPassword = repeatedPassword;
    this.email = email;
    this.phoneNumber = phoneNumber;
    */
  }
}
