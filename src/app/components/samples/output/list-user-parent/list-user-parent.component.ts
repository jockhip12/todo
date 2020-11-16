import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-list-user-parent',
  templateUrl: './list-user-parent.component.html',
  styleUrls: ['./list-user-parent.component.css']
})
export class ListUserParentComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [];
  }

  onAdded(user: User){
    // this.users.push(user);
    this.users.push({id:user.id,firstName:user.firstName,lastName:user.lastName,age:user.age,email:user.email});
  }

}
