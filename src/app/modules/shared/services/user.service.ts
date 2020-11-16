import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../models/User';
import { Observable  /*, BehaviorSubject */ } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

import { pipe } from 'rxjs/util/pipe';
import { filter, map } from 'rxjs/operators';
import { userInfo } from 'os';

@Injectable()
export class UserService {
  baseUrl = environment.baseUrl;


  // private data_users = new BehaviorSubject<User[]>([]);

  constructor(private _http: HttpClient) {
  }

  // For mapping reasons
  listUsers(): Observable<any[]> {
    return this._http.get<any[]>(this.baseUrl + '/listUsers');
  }

  listUsersMap(): Observable<User[]> {
    return this._http.get<any[]>(this.baseUrl + '/listUsers').
      pipe(
        map(tab => tab.map(u => {
          let usr: User = {
            id: u.id, firstName: u.firstName ? u.firstName : u.prenom, // ?? u.prenom,
            lastName: u.lastName ? u.lastName : u.nom, //?? u.nom,
            email: u.email,
            age: u.age
          };
          return usr;
        }
        )
        )
      );

  }



  /*
  listUsers():Observable<User[]>{
    return this._http.get<User[]>(this.baseUrl + '/listUsers');
  }
  */

  getById(id: any): Observable<User> {
    return this._http.get<User>(this.baseUrl + '/GetOne/' + id);
  }

  updateUser(user: User): Observable<any> {
    return this._http.put<any>(this.baseUrl + '/updateUser/' + user.id, user);
  }

  deleteUser(id: number): Observable<any> {
    if(id){
      return this._http.delete<any>(this.baseUrl + '/deleteUser/' + id);
    }
    throw new Error('inValid ID');
  }

  addUser(user: User): Observable<User[]> {
    return this._http.post<User[]>(this.baseUrl + '/addUser/', user);
  }


}
