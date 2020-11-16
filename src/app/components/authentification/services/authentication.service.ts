import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authenticate } from '../../../models/authenticate';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthentificationService {
  errorMessage: string;
  constructor(private _http: HttpClient, private _router: Router) { }
  login(authenticate: Authenticate) {
    this._http.post<any>("http://localhost:8081/authenticate", authenticate)
    .subscribe(
      data => {
        if(data.token) {
          localStorage.setItem("token", data.token); // stringify
          this._router.navigate(['/']);
        }else {
          this.errorMessage = "Authetication failed";
          localStorage.setItem("error", this.errorMessage);
          this._router.navigate(['/login',false]);
          // Solution : this._router.navigate(['/login',false]);
        }
      },
      error => {}
    );
  }

  isAuthenticated() {
    return localStorage.getItem('token') ? true : false;
  }

  testHelloApi(){
    this._http.get<string>("http://localhost:8081/hello").subscribe(
      data => {console.log(data)},
      error => {}
    );
  }

}
