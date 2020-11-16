import { Component, OnInit, ViewChild } from '@angular/core';
import { MyViewChildComponent } from '../my-view-child/my-view-child.component';

@Component({
  selector: 'app-my-view-parent',
  templateUrl: './my-view-parent.component.html',
  styleUrls: ['./my-view-parent.component.css']
})
export class MyViewParentComponent implements OnInit {

  @ViewChild(MyViewChildComponent)
  myChildDiv: MyViewChildComponent;
  
  constructor() { }

  ngOnInit() {
    this.myChildDiv.message="Howdy from TEXAS !"
  }

  change()
  {
    this.myChildDiv.changeMessage("Hello Folks :)")
  }

}
