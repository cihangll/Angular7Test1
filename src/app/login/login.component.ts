import { Component, OnInit } from "@angular/core";
import { User } from "./user";
import { NgForm } from "@angular/forms";
import { AccountService } from "../services/account.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) {}
  model: User = new User();
  ngOnInit() {}
  login(ngForm: NgForm) {
    this.accountService.login(this.model);
    if (this.accountService.isLoggedIn()) {
      this.router.navigate([""]);
    }
  }
}
