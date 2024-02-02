// user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Import your UserService

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  users: any=[]; // Adjust the type based on your actual user data structure

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData() {
    this.userService.getUsers().subscribe(
      (userData) => {
        this.users = userData;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
