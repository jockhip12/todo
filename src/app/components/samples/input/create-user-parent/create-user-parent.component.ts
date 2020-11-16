import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-create-user-parent',
  templateUrl: './create-user-parent.component.html',
  styleUrls: ['./create-user-parent.component.css']
})
export class CreateUserParentComponent implements OnInit {

 
  users: User[];
  user: User = new User();

  constructor() { }

  ngOnInit() {
    this.users=[];
  }

  onClickButton() {
    this.users.push(this.user);
  }

}
