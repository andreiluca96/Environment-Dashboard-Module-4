import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UsersComponent }   from '../users/users.component';
import { LocationsComponent }     from '../locations/locations.component';
import { AppComponent } from '../app.component';
//import { LoginComponent } from '../login/login.component';
const appRoutes: Routes = [
  { path: '/users', component: UsersComponent },
  { path: '/locations',        component: LocationsComponent },
  //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
