import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JWT_TOKEN } from "../app.constants";

@Injectable({ providedIn: 'root' })
export class UserRouteAccessService implements CanActivate {
  constructor(
    private router: Router
  ) {}

  canActivate(): boolean {
    const canActive = this.checkLogin();
    if( !canActive) {
        this.router.navigate(["/login"]);
    }
    return canActive;
  }

  checkLogin(): boolean {
    return window.localStorage.getItem(JWT_TOKEN) ? true : false;
  }
}
