import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'locations',      component: LocationsComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'register',      component: RegisterComponent },

  { path: '', redirectTo: '/LoginComponent', pathMatch: 'full'},
  { path: '**', component: LoginComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
