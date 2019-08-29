import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  private isToday=true;
  private isYesterday=false;
  private isWeek=false;
  private isMonth=false;
  
  constructor() { }

  ngOnInit() {
  }

}
