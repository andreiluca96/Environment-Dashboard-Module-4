import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Users} from './users';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})

export class UsersComponent implements OnInit {
  private users: Users[];
  text;
  constructor(private __usersService: UsersService) { 
    this.__usersService.getPosts().subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit() {
    this.text = 'blaa';
    // this.users = [
    //   {
    //     username: 'andreiluca'
    //   },
    //   {
    //     username: 'mateilupascu'
    //   }
    // ];
  }

  addUser() {
    // this.users.push({
    //   username: this.text
    // });
  }

}
