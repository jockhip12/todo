import { Injectable } from '@angular/core';
import { AuthentificationService } from '../../authentification/services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class ActivatedGuardService {

  constructor(private _authApi: AuthentificationService, private _router: Router) { }

  canActivate(): boolean {
    /*if (!this._authApi.isAuthenticated()) {
      this._router.navigate(['login']);
      return false;
    }*/
    return true;
  }

}
