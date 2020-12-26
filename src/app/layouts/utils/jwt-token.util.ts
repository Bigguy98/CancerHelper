import { Injectable } from "@angular/core";
import { JWT_TOKEN } from "src/app/app.constants";

@Injectable({ providedIn: 'root' })
export class TokenProvider {

    constructor() {

    }

    saveToken(token: string): void {
        window.localStorage.setItem(JWT_TOKEN, token);
        window.sessionStorage.setItem(JWT_TOKEN, token);
    }

    clearToken(): void {
        if (window.localStorage.getItem(JWT_TOKEN)) {
            window.localStorage.removeItem(JWT_TOKEN);
        }

        if (window.sessionStorage.getItem(JWT_TOKEN)) {
            window.sessionStorage.removeItem(JWT_TOKEN);
        }
    }


}