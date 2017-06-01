import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LocationsComponent } from './locations/locations.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

// Route Configuration
export const router: Routes = [
  { path: '/users', component: UsersComponent },
  { path: '/locations',component: LocationsComponent },
  { path: '/register',component:RegisterComponent},
  { path :'/login', component:LoginComponent},
  { path: '**', component: AppComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing = RouterModule.forRoot(router);
