import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserService } from '../../modules/shared/services/user.service';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete-user',
  templateUrl: './confirm-delete-user.component.html',
  styleUrls: ['./confirm-delete-user.component.css']
})
export class ConfirmDeleteUserComponent implements OnInit {

  @Input()
  idUser: number;

  @ViewChild('closebutton') closebutton;

  constructor(private _userApi: UserService, private _router: Router) { }

  ngOnInit() {
    console.log(this);
  }

  deleteUser() {
    if (this.idUser) {
      this._userApi.deleteUser(this.idUser).subscribe(
        success => { this._router.navigate(['/list']); console.log("delete!!!") },
        error => { console.log(error) }
      );
      this.closebutton.nativeElement.click();
    }else {
      return;
    }

    /*
      let index: number = this.allusers.findIndex(usr => user.id === idUser);
      this.allusers.splice(index,1);
    */

  }

}
