import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './services/authentication.service';
import { Authenticate } from '../../models/authenticate';
import { error } from 'protractor';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  authenticate: Authenticate = new Authenticate();

  constructor(private _authApi: AuthentificationService) { }

  ngOnInit() {
  }

  login() {

    this._authApi.login(this.authenticate);
  }

}
