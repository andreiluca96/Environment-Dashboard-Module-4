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
  private createEnable=false;
  private selectedUser:Users;
  private users: Users[];
  private newUser: Users;
  text;
  username: string;
  firstname;
  lastname;
  password;
  id;
  email;
  phonenumber;

  constructor(private __usersService: UsersService) {
    this.__usersService.getUsers().subscribe(users => {
      this.users = users;
    });

  }

  ngOnInit() {
  }

  addUser(userNameInputValue,firstNameInputValue,lastNameInputValue,passwordInputValue,emailInputValue,PhoneNumberInputValue) {
    this.newUser=new Users;

    this.newUser.userName =userNameInputValue;
    this.newUser.firstName = this.firstname;
    this.newUser.lastName = this.lastname;
    this.newUser.email = this.email;
    this.newUser.password = this.password;
    this.newUser.phoneNumber = this.phonenumber;
    this.__usersService.addUsers(this.newUser);
    /*this.__usersService.getUsers().subscribe(users => {
      this.users = users;
    });*/
  }



  editClicked(user:Users){
    this.selectedUser=user;
  }

  deleteClicked(user:Users){
    if(user==this.selectedUser) this.selectedUser=null;
    this.__usersService.deleteUser(user.id);
    /*this.__usersService.getUsers().subscribe(users => {
      this.users = users;
    });*/
  }

  cancelClicked(){
    this.selectedUser=null;
  }

  saveClicked(user:Users,userNameInputValue,firstNameInputValue,lastNameInputValue,passwordInputValue,emailInputValue,PhoneNumberInputValue){
    user.userName=userNameInputValue;
    user.firstName=firstNameInputValue;
    user.lastName=lastNameInputValue;
    user.password=passwordInputValue;
    user.email=emailInputValue;
    user.phoneNumber=PhoneNumberInputValue;
    this.selectedUser=null;
    this.__usersService.updateUser(user);
    /*this.__usersService.getUsers().subscribe(users => {
      this.users = users;
    });*/
  }

  addUserClicked(){
    this.createEnable=true;
  }

  cancelAddClicked(){
    this.createEnable=false;
  }

}
