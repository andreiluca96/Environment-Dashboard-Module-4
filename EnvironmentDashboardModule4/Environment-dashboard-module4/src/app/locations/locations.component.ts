import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  newUser;
  newLocation;
  users;
  locations;
  constructor(private _locationsService: LocationsService) { }

  ngOnInit() {
      this.users = this._locationsService.getUsers();
    this.locations = this._locationsService.getLocations();
  }

  addLocation(){
    this.users.push({
      text: this.newUser
    });
    this.locations.push({
      text: this.newLocation
    });
  }

  deleteLocation(userText){
    for(var i=0; i< this.users.length; i++)
      if(this.users[i].text == userText){
        this.users.splice(i,1);
        this.locations.splice(i,1);
      }

}

}
