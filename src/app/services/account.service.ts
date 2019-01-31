import { Injectable } from "@angular/core";
import { User } from "../login/user";

@Injectable()
export class AccountService {
  constructor() {}
  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == "cihang" && user.password == "asdqwe123") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
