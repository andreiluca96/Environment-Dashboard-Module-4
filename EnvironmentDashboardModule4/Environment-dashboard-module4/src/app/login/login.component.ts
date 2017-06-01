import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name : string;
  pass : string;
  constructor() { }

  ngOnInit() {
  }
  
  login(){
    console.log(this.name + this.pass);
  }
}
