import { Component } from "@angular/core";
import { AccountService } from "./services/account.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private accountService: AccountService, private router: Router) {}
  title = "shop";

  isLoggedIn(): boolean {
    return this.accountService.isLoggedIn();
  }
  logOut() {
    this.accountService.logout();
    this.router.navigate([""]);
  }
}
