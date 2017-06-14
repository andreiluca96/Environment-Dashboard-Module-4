import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocationsService } from '../locations.service';
import { Locations } from './locations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  @Input() event: Event;
  @Output() positionChanged = new EventEmitter<any>();
  position: google.maps.LatLng;

  userId: string;
  latitude: number;
  longitude: number;
  alias: string;
  getUserId: string;
  deleteUserId: string;
  newLocation: Locations;
  locations: Locations[];
  alias2: string;

marker = {
    display: true,
    lat: null,
    lng: null,
  };

  constructor(private __locationSerive : LocationsService) { }

  ngOnInit() {
    this.newLocation = new Locations();
    this.locations = [];
    this.getLocations();
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

  details(_a,event) {
    
  }

  clicked({target: marker}, alias2) {
    this.marker.lat = marker.getPosition().lat();
    this.marker.lng = marker.getPosition().lng();
    this.alias2 = alias2;
    marker.nguiMapComponent.openInfoWindow('iw', marker);
  }

  onClick(event) {
    if (event instanceof MouseEvent)
        return;
        console.log(event);
    this.position = event.latLng;
    this.latitude = event.latLng.lat();
    this.longitude = event.latLng.lng();
    // this.positionChanged.emit(this.position);
    // event.target.panTo(event.latLng);
  }

}
