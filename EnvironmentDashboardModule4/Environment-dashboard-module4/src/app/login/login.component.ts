import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Http} from '@angular/http';
import {Users} from '../users/users';
import {LoginModel} from './LoginModel'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  username : string;
  pass : string;
  loginModel: LoginModel;
  constructor(private __usersService: UsersService) {this.loginModel=new LoginModel; }

  ngOnInit() {
  }

  login(){
    //console.log(this.username + " "+this.pass);
    this.loginModel.password=this.pass;
    this.loginModel.username=this.username;
    this.__usersService.login(this.loginModel);
  }
}
