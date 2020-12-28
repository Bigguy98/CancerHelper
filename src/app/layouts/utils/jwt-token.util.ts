import { Injectable } from "@angular/core";
import { JWT_TOKEN, USER_INFO } from "src/app/app.constants";

@Injectable({ providedIn: 'root' })
export class TokenProvider {

    constructor() {

    }

    saveToken(token: string): void {
        window.localStorage.setItem(JWT_TOKEN, token);
        window.sessionStorage.setItem(JWT_TOKEN, token);
    }

    clearStorage(): void {
        if (window.localStorage.getItem(JWT_TOKEN)) {
            window.localStorage.removeItem(JWT_TOKEN);
        }

        if (window.sessionStorage.getItem(JWT_TOKEN)) {
            window.sessionStorage.removeItem(JWT_TOKEN);
        }

        if (window.localStorage.getItem(USER_INFO)) {
            window.localStorage.removeItem(USER_INFO);
        }

        if (window.sessionStorage.getItem(USER_INFO)) {
            window.sessionStorage.removeItem(USER_INFO);
        }

    }


    saveUserInfo(info: string): void {
        window.localStorage.setItem(USER_INFO, info);
        window.sessionStorage.setItem(USER_INFO, info);
    }

    getUserInfo(): any {
        return JSON.parse(window.localStorage.getItem(USER_INFO) || window.sessionStorage.getItem(USER_INFO));
    }


}