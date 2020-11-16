import { Component, OnInit , Input} from '@angular/core';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-list-user-child',
  templateUrl: './list-user-child.component.html',
  styleUrls: ['./list-user-child.component.css']
})
export class ListUserChildComponent implements OnInit {

  @Input()
  t_users : User[];

  constructor() { }

  ngOnInit() {
  }

}
