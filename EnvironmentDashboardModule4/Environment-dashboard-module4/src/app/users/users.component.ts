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
  private selectedUser:Users;
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
    /*this.__usersService.getUsers().subscribe(users => {
      this.users = users;
    });*/
    this.users=this.__usersService.getUsers();
    console.log("asd");

/*
    this.__usersService.getUserById('59156d656cea4a46349c8401').subscribe( user => {
      this.newUser.id = user.id;
      this.newUser.userName = user.userName;
      this.newUser.firstName = user.firstName;
      this.newUser.lastName = user.lastName;
      this.newUser.password = user.password;
      this.newUser.email = user.email;
      this.newUser.phoneNumber = user.phoneNumber;
      console.log(this.newUser);
   } );*/

  }

  ngOnInit() {
  }

  addUser() {
    console.log('Adding user...');
    this.newUser.userName = this.username;
    this.newUser.firstName = this.firstname;
    this.newUser.lastName = this.lastname;
    this.newUser.email = this.email;
    this.newUser.password = this.password;
    this.newUser.phoneNumber = this.phonenumber;





    //adaugare a unui nou utilizator prin servicii
    this.__usersService.addUsers(this.newUser);
    /*this.__usersService.getUsers().subscribe(users => {
      this.users = users;
    });*/
  }

  deleteUser() {
    console.log('Deleting user...');
    this.__usersService.deleteUser(this.id);

    /*this.__usersService.getUsers().subscribe(users => {
      this.users = users;
    });*/


  }

  /*updateUser() {
    console.log('Updating user...');
    this.newUser.id = this.id;
    this.newUser.userName = this.username;
    this.newUser.firstName = this.firstname;
    this.newUser.lastName = this.lastname;
    this.newUser.email = this.email;
    this.newUser.password = this.password;
    this.newUser.phoneNumber = this.phonenumber;

    this.__usersService.updateUser(this.newUser);
  }*/


  getUserById() {
    console.log('Getting user by id...');
  }



  editClicked(user:Users){
    this.selectedUser=user;
  }

  deleteClicked(user:Users){
    if(user==this.selectedUser) this.selectedUser=null;
    //this.users.splice(this.users.indexOf(user),1);

    this.__usersService.deleteUser(user.id);
    // de decomentat
    /*this.__usersService.getUsers().subscribe(users => {
      this.users = users;
    });*/
  }

  cancelClicked(){
    this.selectedUser=null;
  }

  saveClicked(user:Users,value){
    user.firstName=value;
    this.selectedUser=null;
    this.__usersService.updateUser(user);
  }

}
