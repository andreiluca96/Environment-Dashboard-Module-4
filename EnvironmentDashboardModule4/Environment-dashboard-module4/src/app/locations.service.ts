import { Injectable } from '@angular/core';
import {LocationsComponent} from './locations/locations.component'
import {Headers, RequestOptions, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Locations, } from './locations/locations';

@Injectable()
export class LocationsService {
  private url = 'http://localhost:8100/v1/users/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private __http: Http) {  }

  addLocation(lc:LocationsComponent,userId : string, newLocation : Locations) {
    let postURL = this.url + userId + '/locations/';
      console.log(JSON.stringify(newLocation));
      this.__http
      .post(postURL, JSON.stringify(newLocation), {headers: this.headers})
      .toPromise()
      .then(res => {
        lc.getLocations();
        return res.json().data as Locations;
      })
      .catch(this.handleError);
  }

  getLocations(userId : string) : Observable<Locations[]> {
    let getURL = this.url + userId + '/locations/';
    return this.__http.get(getURL).map(res => res.json());
  }

  deleteLocations(userId : string) {
    let deleteURL = this.url + userId + '/locations/';
    console.log(deleteURL);
    this.__http
     .delete(deleteURL, {headers : this.headers})
     .toPromise()
     .then(() => null)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
