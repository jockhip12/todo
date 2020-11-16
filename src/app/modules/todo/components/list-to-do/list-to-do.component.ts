import { Component, OnInit } from '@angular/core';
import { ListToDoService } from '../../services/list-to-do.service';
import { ListToDo } from '../../../../models/list-to-do';
import { User } from '../../../../models/User';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  listToDos: any[] = [];
  users: User[] = [];

  constructor(private _toDoApi: ListToDoService, private _usersApi: UserService) { }

  
  /*
  getUserFirstName(user_id) {
    return this.users.find(u => u.id === user_id) ? this.users.find(u => u.id === user_id).firstName : "";
  }
  */

  ngOnInit() {
    this.getListToDos();
    this.getUsers();
  }

  getListToDos() {
    this._usersApi.listUsers().subscribe(
      datas => {
        this._toDoApi.listToDos().subscribe(
          data => {
            data.forEach(
              d => {
                this.listToDos.push({
                  id: d.id, text: d.text, completed: d.completed, id_user: d.id_user,
                  // username: datas.find(usr => usr.id === d.id_user) ? datas.find(usr => usr.id === d.id_user).firstName : ""
                  user: datas.find(usr => usr.id === d.id_user)
                }
                );
              });
          },
          error => { },
          () => { }
        );
      },
      error => { },
      () => { }
    );
  }


  /*this._toDoApi.listToDos().subscribe(
    data => {this.listToDos = data},
    error => {console.log(error);}
  );*/

getUsers(){
  this._usersApi.listUsers().subscribe(
    data => { this.users = data },
    error => { console.log(error); }
  );
}

}
