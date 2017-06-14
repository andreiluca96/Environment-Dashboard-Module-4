import { Component,OnInit } from '@angular/core';
import { LocationsComponent } from './locations/locations.component';
import {LocationsService} from './locations.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocationsService]
  })
export class AppComponent implements OnInit {
  title = 'app works!';
  logged : string;

    ngOnInit() {
       this.logged = sessionStorage.getItem('id');
  }

  logout()
  {
    sessionStorage.removeItem('id');
    window.location.replace("/login");
  }

  events() {
    window.location.replace("http://localhost:4200/" + sessionStorage.getItem('id'));
  }

 
}
