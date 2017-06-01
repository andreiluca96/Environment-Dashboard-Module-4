"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/map");
var LocationsService = (function () {
    function LocationsService(__http) {
        this.__http = __http;
        this.url = 'http://localhost:8100/v1/users/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    LocationsService.prototype.addLocation = function (userId, newLocation) {
        var postURL = this.url + userId + '/locations/';
        console.log(JSON.stringify(newLocation));
        this.__http
            .post(postURL, JSON.stringify(newLocation), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    LocationsService.prototype.getLocations = function (userId) {
        var getURL = this.url + userId + '/locations/';
        return this.__http.get(getURL).map(function (res) { return res.json(); });
    };
    LocationsService.prototype.deleteLocations = function (userId) {
        var deleteURL = this.url + userId + '/locations/';
        console.log(deleteURL);
        this.__http
            .delete(deleteURL, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    LocationsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return LocationsService;
}());
LocationsService = __decorate([
    core_1.Injectable()
], LocationsService);
exports.LocationsService = LocationsService;
