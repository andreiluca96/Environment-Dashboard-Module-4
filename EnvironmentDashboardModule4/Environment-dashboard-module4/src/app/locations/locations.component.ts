import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../locations.service';
import { Locations } from './locations';

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
    this.newLocation.latitude = this.latitude;
    this.newLocation.alias = this.alias;
    this.newLocation.longitude = this.longitude;

    console.log(this.newLocation);

    this.__locationSerive.addLocation(this.userId, this.newLocation);
  }

  deleteLocations() {
    console.log('Deleting locations...');
    this.__locationSerive.deleteLocations(this.deleteUserId);
  }

  getLocations() {
    console.log('Getting locations...');
    this.__locationSerive.getLocations(this.getUserId).subscribe( gettedLocations => this.locations = gettedLocations);
  }

}
