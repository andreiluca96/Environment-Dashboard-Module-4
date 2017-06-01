import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Http} from '@angular/http';
import {Users} from '../users/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersService]
})
export class RegisterComponent implements OnInit {
  firstName : string;
  lastName : string;
  userName : string;
  password : string;
  repeatedPassword : string;
  email : string;
  phoneNumber : string;
  message:string;
  private newUser:Users;


  constructor(private __usersService: UsersService) {
  this.message=null;}

  ngOnInit() {
  }

  register(){
  /*  console.log(this.firstName + " " + this.lastName + " " + this.userName + " " + this.password + " " +
    this.repeatedPassword + " " + this.email + " " + this.phoneNumber);*/
    this.newUser=new Users;
    this.newUser.userName =this.userName;
    this.newUser.firstName = this.firstName;
    this.newUser.lastName = this.lastName;
    this.newUser.email = this.email;
    this.newUser.password = this.password;
    this.newUser.phoneNumber = this.phoneNumber;
    this.__usersService.addUsers(this.newUser);
    this.message="Account created";
  }
}
