import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ListToDo } from '../../../../models/list-to-do';
import { ListToDoService } from '../../services/list-to-do.service';
import { Router } from '@angular/router';
import { User } from '../../../../models/User';
import { UserService } from '../../../shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
  //,
  //changeDetection : ChangeDetectionStrategy.OnPush
})
export class CreateToDoComponent implements OnInit {

  toDo: ListToDo = {id:1,completed:true,text:"Hello",id_user:12};
  users: User[];

  todoGroup : FormGroup;

  constructor(private _toDoApi: ListToDoService, private _userApi: UserService,
     private _router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUsers();
    this.todoGroup = this._formBuilder.group(
      {
        text : [this.toDo.text, [Validators.required, Validators.maxLength(255)]],
        completed : [this.toDo.completed],
        id_user : [this.toDo.id_user]
      }
    )
  }

  onSubmit() {
    console.log(this.toDo);

    console.log(this.todoGroup.value);

    //this.toDo=this.todoGroup.value;

    if(this.todoGroup.valid) {
      this._toDoApi.addTodo(this.todoGroup.value).subscribe(
        data => {this._router.navigate(["todo/list"]);},
        error => {console.log(error)},
        ()=> {
          // finally bloc
        }
      );
    }else {
      console.log("required!");
      // return ;
    }
  }

  testMeNow(){
    console.log(this.toDo);
  }

  addToDo() {
    this._toDoApi.addTodo(this.toDo).subscribe(
      data => {this._router.navigate(["todo/list"]);},
      error => {console.log(error)},
      ()=> {
        // finally bloc
      }
    );
  }
  getUsers(){
    this._userApi.listUsers().subscribe(
      data => {this.users = data; },
      error => {}
    );
  }
}