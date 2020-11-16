import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../modules/shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthentificationService } from '../authentification/services/authentication.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Input()
  update = false;

  user: User = new User();

  constructor(private _userApi: UserService, private _router: Router, private _activatedRoute: ActivatedRoute, private _authApi: AuthentificationService) { }

  ngOnInit() {
    this._authApi.testHelloApi();

    if(this.update) {
      const userId = this._activatedRoute.snapshot.params.id;
        console.log('my id' + userId);
        this.getuserById(userId);
    }
  }

  show() {
    // alert(this.user.firstName);
    this.update ? this.updateUser() : this.addUser();
    // this.addUser();
  }
  goToList() {
    this._router.navigate(['list']);
  }

  addUser() {

    /*
    this._userApi.addUser(this.user).subscribe((observer)=> {
      observer.next(data) { this.goToList()},
      observer.error(err) { console.log('Received an errror: ' + err)}
    });
    */

    const abc = this._userApi.addUser(this.user).subscribe(
      data => {
        //this._router.navigate(['list'])
       
      },
      err => { console.log(err) },
      () => { console.log("finalized") }
    );
  }
  getuserById(idUser: number) {
    this._userApi.getById(idUser).subscribe(
      data => {
        this.user = data;
        console.log('my data ' + data);
        },
      error => {}
    )
  }

  updateUser() {
    this._userApi.updateUser(this.user).subscribe(
      data => {
        this._router.navigate(['/list']);
      },
      err => { console.log(err) },
      () => { console.log("finalized") }
    );
  }

}
