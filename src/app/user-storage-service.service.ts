// user-storage.service.ts

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserProfile } from './user-profile'; // Import your user profile model

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  private cookieKey = 'user-profile';

  constructor(private cookieService: CookieService) {}

  saveUserProfile(userProfile: UserProfile): void {
    this.cookieService.set(this.cookieKey, JSON.stringify(userProfile));
  }

  getUserProfile(): UserProfile | null {
    const cookieData = this.cookieService.get(this.cookieKey);
    return cookieData ? JSON.parse(cookieData) : null;
  }

  clearUserProfile(): void {
    this.cookieService.delete(this.cookieKey);
  }
}
