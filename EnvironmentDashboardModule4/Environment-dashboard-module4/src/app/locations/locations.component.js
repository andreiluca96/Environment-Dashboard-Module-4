"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var locations_1 = require("./locations");
var LocationsComponent = (function () {
    function LocationsComponent(__locationSerive) {
        this.__locationSerive = __locationSerive;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        this.newLocation = new locations_1.Locations();
        this.locations = [];
    };
    LocationsComponent.prototype.addLocation = function () {
        console.log('Adding location...');
        this.newLocation.latitude = this.latitude;
        this.newLocation.alias = this.alias;
        this.newLocation.longitude = this.longitude;
        console.log(this.newLocation);
        this.__locationSerive.addLocation(this.userId, this.newLocation);
    };
    LocationsComponent.prototype.deleteLocations = function () {
        console.log('Deleting locations...');
        this.__locationSerive.deleteLocations(this.deleteUserId);
    };
    LocationsComponent.prototype.getLocations = function () {
        var _this = this;
        console.log('Getting locations...');
        this.__locationSerive.getLocations(this.getUserId).subscribe(function (gettedLocations) { return _this.locations = gettedLocations; });
    };
    return LocationsComponent;
}());
LocationsComponent = __decorate([
    core_1.Component({
        selector: 'app-locations',
        templateUrl: './locations.component.html',
        styleUrls: ['./locations.component.css'],
    })
], LocationsComponent);
exports.LocationsComponent = LocationsComponent;
