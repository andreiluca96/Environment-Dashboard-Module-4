import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Users} from './users/users';

@Injectable()
export class UsersService {
  private users;
  private url = 'http://localhost:8100/v1/users';
  constructor(private __http: Http) {
    
   }

   getUsers() : Observable<Users[]> {
     return this.__http.get(this.url).map(res => res.json());
   }

   addUsers(user: Users) {
     const headers = new Headers({'Content-Type': 'application/json'});
     this.__http
     .post(this.url, JSON.stringify(user), headers)
    .subscribe((res: Response) => {
    this.users = res.json();
    });
   }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
