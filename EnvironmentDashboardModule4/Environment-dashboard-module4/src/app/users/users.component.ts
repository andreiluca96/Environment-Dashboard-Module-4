import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Users} from './users';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})

export class UsersComponent implements OnInit {
  private users: Users[];
  newUser: Users;
  text;
  username: string;
  firstname;
  lastname;
  password;
  id;
  email;
  phonenumber;
  constructor(private __usersService: UsersService) { 
    this.newUser = new Users();
    this.__usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit() {
    this.text = 'blaa';
    // this.users = [
    //   {
    //     username: 'andreiluca'
    //   },
    //   {
    //     username: 'mateilupascu'
    //   }
    // ];
  }

  addUser() {
    console.log('Adding user...');
    this.newUser.userName = this.username;
    this.newUser.firstName = this.firstname;
    this.newUser.lastName = this.lastname;
    this.newUser.email = this.email;
    this.newUser.password = this.password;
    this.newUser.phoneNumber = this.phonenumber;
    this.__usersService.addUsers(this.newUser);
    this.__usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
