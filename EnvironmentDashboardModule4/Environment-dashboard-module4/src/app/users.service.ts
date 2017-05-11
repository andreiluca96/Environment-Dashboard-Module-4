import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Users} from './users/users';

@Injectable()
export class UsersService {
  private users;
  private url = 'https://api.myjson.com/bins/14f6u5';
  constructor(private __http: Http) {
    
   }

   getPosts() : Observable<Users[]> {
     return this.__http.get(this.url).map(res => res.json());
   }

}
