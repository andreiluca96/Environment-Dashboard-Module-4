"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users_1 = require("./users");
var users_service_1 = require("../users.service");
var UsersComponent = (function () {
    function UsersComponent(__usersService) {
        this.__usersService = __usersService;
        this.createEnable = false;
        /*this.__usersService.getUsers().subscribe(users => {
          this.users = users;
        });*/
        this.users = this.__usersService.getUsers();
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.addUser = function (userNameInputValue, firstNameInputValue, lastNameInputValue, passwordInputValue, emailInputValue, PhoneNumberInputValue) {
        this.newUser = new users_1.Users;
        this.newUser.userName = userNameInputValue;
        this.newUser.firstName = this.firstname;
        this.newUser.lastName = this.lastname;
        this.newUser.email = this.email;
        this.newUser.password = this.password;
        this.newUser.phoneNumber = this.phonenumber;
        this.__usersService.addUsers(this.newUser);
        /*this.__usersService.getUsers().subscribe(users => {
          this.users = users;
        });*/
    };
    UsersComponent.prototype.editClicked = function (user) {
        this.selectedUser = user;
    };
    UsersComponent.prototype.deleteClicked = function (user) {
        if (user == this.selectedUser)
            this.selectedUser = null;
        this.__usersService.deleteUser(user.id);
        /*this.__usersService.getUsers().subscribe(users => {
          this.users = users;
        });*/
    };
    UsersComponent.prototype.cancelClicked = function () {
        this.selectedUser = null;
    };
    UsersComponent.prototype.saveClicked = function (user, userNameInputValue, firstNameInputValue, lastNameInputValue, passwordInputValue, emailInputValue, PhoneNumberInputValue) {
        user.userName = userNameInputValue;
        user.firstName = firstNameInputValue;
        user.lastName = lastNameInputValue;
        user.password = passwordInputValue;
        user.email = emailInputValue;
        user.phoneNumber = PhoneNumberInputValue;
        this.selectedUser = null;
        this.__usersService.updateUser(user);
        /*this.__usersService.getUsers().subscribe(users => {
          this.users = users;
        });*/
    };
    UsersComponent.prototype.addUserClicked = function () {
        this.createEnable = true;
    };
    UsersComponent.prototype.cancelAddClicked = function () {
        this.createEnable = false;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css'],
        providers: [users_service_1.UsersService]
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
