import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { Locations } from './locations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  userId: string;
  latitude: number;
  longitude: number;
  alias: string;
  getUserId: string;
  deleteUserId: string;
  newLocation: Locations;
  locations: Locations[];

  constructor(private __locationSerive : LocationsService) { }

  ngOnInit() {
    this.newLocation = new Locations();
    this.locations = [];
  }

  addLocation() {
    console.log('Adding location...');
    console.log(this.latitude);
    this.newLocation.latitude = this.latitude;
    this.newLocation.alias = this.alias;
    this.newLocation.longitude = this.longitude;

    console.log(this.newLocation);

    this.__locationSerive.addLocation(this, sessionStorage.getItem('id'), this.newLocation);

    this.latitude=null;
    this.longitude=null;
    this.alias=null;
  }

  deleteLocations() {
    console.log('Deleting locations...');
    this.__locationSerive.deleteLocations(this.deleteUserId);
  }

  getLocations() {
    this.getUserId = sessionStorage.getItem('id');
    this.__locationSerive.getLocations(this.getUserId).subscribe( gettedLocations => {
      this.locations = gettedLocations;
    });
  }

}
