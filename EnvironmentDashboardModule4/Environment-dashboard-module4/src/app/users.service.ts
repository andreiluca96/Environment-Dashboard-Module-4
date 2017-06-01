import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Users} from './users/users';
import {LoginModel} from './login/LoginModel';

@Injectable()
export class UsersService {
  private users:Users[]=[];
  private loginModel:LoginModel;
  private userId : string;
  private url = 'http://localhost:8100/v1/users/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private __http: Http) { this.loginModel=new LoginModel;}

  getUsers() : Observable<Users[]> {
    return this.__http.get(this.url).map(res => res.json());
  }
/*
   getUsers(){

          let auxUser:Users={id:'1',userName: 'radu.luca',password: 'pass',lastName: 'radu',firstName: 'luca',email: 'radu.luca@yahoo.com',phoneNumber: '074253535'};
          let auxUser2:Users={id:'2',userName: 'radu.luca2',password: 'pass',lastName: 'radu2',firstName: 'luca2',email: 'radu.luca2@yahoo.com',phoneNumber: '074253353'};
          this.users.push(auxUser);
          this.users.push(auxUser2);
          return this.users;
   }*/
   addUsers(user: Users) {
      console.log(JSON.stringify(user));
      this.__http
      .post(this.url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Users)
      .catch(this.handleError);
   }

   deleteUser(id: string) {
     let deleteURL = this.url + id;
     console.log(deleteURL);
     this.__http
     .delete(deleteURL, {headers : this.headers})
     .toPromise()
     .then(() => null)
     .catch(this.handleError);
   }

   updateUser(user: Users) {
     let updateURL = this.url + user.id;
     console.log(updateURL);
     user.id = null;
     this.__http
     .put(updateURL, JSON.stringify(user), {headers: this.headers})
     .toPromise()
     .then(() => event)
     .catch(this.handleError);
   }

   getUserById(id: string) : Observable<Users> {
     let getUserURL = this.url + id;
     console.log(getUserURL);
     return this.__http.get(getUserURL).map(res => res.json());
   }

   login(loginModel:LoginModel){
     let loginURL=this.url+"login";
     this.__http
     .post(loginURL, JSON.stringify(loginModel),{headers: this.headers})
     .toPromise()
     .then(res => this.userId = res.toString())
     .catch(this.handleError);
   }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
