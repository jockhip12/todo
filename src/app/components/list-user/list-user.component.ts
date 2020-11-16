import { Component, OnInit } from '@angular/core';
import { UserService } from '../../modules/shared/services/user.service';
import { User } from '../../models/User';
import { ListToDoService } from '../../modules/todo/services/list-to-do.service';
import { error } from 'protractor';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users = [];
  todos = [];
  idUser: number;

  constructor(private _userApi: UserService, private _todoApi: ListToDoService) { }

  ngOnInit() {

    this.getUser();
    //
    console.log('comparaison');
    this._userApi.listUsers().subscribe(r => console.log(r));
    this._userApi.listUsersMap().subscribe(r => console.log(r));

  }

  getUser() {

    this._userApi.listUsers().subscribe(
      data => { 
        // this.users = data; 
        data.forEach (
          d => {
            this.users.push({id:d.id, firstName:d.prenom?d.prenom:d.firstName, 
              lastName:d.nom?d.nom:d.lastName,
            age:d.age, email:d.email, tel :d.tel})
          }
        );
       
        console.log(this.users) 
      },
      error => { },
      () => { }

    );

  }

  clickme() {
    this.users.forEach(user => {
      if (!(user.email && user.email.trim().length !== 0)) {
        user.email = 'test@gmail.com';
      }
    });
  }


  clickme_new() {
    let t : User[]=[];
    this.users.forEach(user => {
      if (!(user.email && user.email.trim().length !== 0)) {
        user.email = 'test@gmail.com';
      }
      t.push(user);
    });
    this.users=t;
  }

  bindThis(idUser: number){
    this.idUser = idUser;
  }

}
