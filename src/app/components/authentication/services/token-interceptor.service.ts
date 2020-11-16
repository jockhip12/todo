import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Intercepting ...');
    console.log('Bearer ' + localStorage.getItem('token'));

    request = request.clone({
     
      headers: request.headers.set('Authorization', 'Bearer '+ 'bjr')
     /* setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      } */
    });
    return next.handle(request);
  }

}
