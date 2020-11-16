import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-view-child',
  templateUrl: './my-view-child.component.html',
  styleUrls: ['./my-view-child.component.css']
})
export class MyViewChildComponent implements OnInit {

  message: string = " Hello World !"

  constructor() { }

  ngOnInit() {
  }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }

}
