import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-create-user-children',
  templateUrl: './create-user-children.component.html',
  styleUrls: ['./create-user-children.component.css']
})
export class CreateUserChildrenComponent implements OnInit {

  @Output()
  evEm_user= new EventEmitter<User>();

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  onClickButton() {
    this.evEm_user.emit(this.user);
  }


  onClickButton2() {
    this.evEm_user.emit(this.user);
  }


}
