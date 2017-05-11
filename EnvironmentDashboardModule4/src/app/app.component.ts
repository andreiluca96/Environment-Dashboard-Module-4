import { Component } from '@angular/core';
import { LocationsComponent } from './locations/locations.component';
import {LocationsService} from './locations.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocationsService]
  })
export class AppComponent {
  title = 'app works!';
}
