"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/map");
var UsersService = (function () {
    function UsersService(__http) {
        this.__http = __http;
        this.users = [];
        this.url = 'http://localhost:8100/v1/users/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    /*getUsers() : Observable<Users[]> {
      //return this.__http.get(this.url).map(res => res.json());
 
      return this.
    }*/
    UsersService.prototype.getUsers = function () {
        var auxUser = { id: '1', userName: 'radu', password: 'pass', lastName: 'radu', firstName: 'nume_1', email: 'radu@yahoo.com', phoneNumber: '074253535' };
        var auxUser2 = { id: '2', userName: 'some_username', password: 'pass', lastName: 'radu2', firstName: 'nume', email: 'mail2@yahoo.com', phoneNumber: '074253353' };
        this.users.push(auxUser);
        this.users.push(auxUser2);
        return this.users;
    };
    UsersService.prototype.addUsers = function (user) {
        console.log(JSON.stringify(user));
        this.__http
            .post(this.url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UsersService.prototype.deleteUser = function (id) {
        var deleteURL = this.url + id;
        console.log(deleteURL);
        this.__http
            .delete(deleteURL, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    UsersService.prototype.updateUser = function (user) {
        var updateURL = this.url + user.id;
        console.log(updateURL);
        user.id = null;
        this.__http
            .put(updateURL, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function () { return event; })
            .catch(this.handleError);
    };
    UsersService.prototype.getUserById = function (id) {
        var getUserURL = this.url + id;
        console.log(getUserURL);
        return this.__http.get(getUserURL).map(function (res) { return res.json(); });
    };
    UsersService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable()
], UsersService);
exports.UsersService = UsersService;
