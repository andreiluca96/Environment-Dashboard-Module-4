import { Injectable } from '@angular/core';
import {Init} from './init-locations';

@Injectable()
export class LocationsService extends Init {

  constructor() {
    super();
    console.log('LocationsService Initialized');
    this.load();
  }

  getUsers(){
    var users = JSON.parse(localStorage.getItem('users'));
    return users;
  }

  getLocations(){
    var locations = JSON.parse(localStorage.getItem('locations'));
    return locations;
  }
}
