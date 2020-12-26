import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { JWT_TOKEN, SERVER_API_PREFIX } from '../app.constants';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (!(SERVER_API_PREFIX && request.url.startsWith(SERVER_API_PREFIX)))) {
      return next.handle(request);
    }

    const token = window.localStorage.getItem(JWT_TOKEN) || window.sessionStorage.getItem(JWT_TOKEN);
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(request);
  }
}
