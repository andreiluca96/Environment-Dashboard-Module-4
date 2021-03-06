import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Http} from '@angular/http';
import {Users} from '../users/users';
import {LoginModel} from './LoginModel'
import {Router} from '@angular/router';

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
  userId:string;
  private message:String;
  constructor(private __usersService: UsersService,private router:Router) {this.loginModel=new LoginModel;this.message=null; }

  ngOnInit() {
  }

  login(){
    this.message="Username or password incorect!";
    this.loginModel.password=this.pass;
    this.loginModel.username=this.username;
  //  this.userId=this.__usersService.login(this.loginModel);
    this.__usersService.login(this.loginModel).subscribe(userId => {
      this.userId = userId;
      if(userId!=undefined){
        sessionStorage.setItem('id',this.userId);
        this.message="Login succes!";
        setTimeout(10000);
        window.location.replace("/locations");
      
      }
    });

  }
}
