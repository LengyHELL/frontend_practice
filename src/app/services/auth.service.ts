import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;

  constructor(private router: Router) {
    if (localStorage.getItem("user_data") !== null) {
      this.loggedIn = true;
      this.router.navigate(['/home']);
    }
    else {
      this.loggedIn = false;
      this.router.navigate(['/login']);
    }
  }

  logIn(username: string): void {
    if (this.loggedIn) {
      return;
    }
    localStorage.setItem("user_data", username);
    location.reload();
  }

  logOut(): void {
    if (!this.loggedIn) {
      return;
    }
    localStorage.removeItem("user_data");
    location.reload();
  }

  public get isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public get getUser(): string {
    let user = localStorage.getItem("user_data");
    if (user == null) {
      return "";
    }
    else {
      return user;
    }
  }
}
