import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  private isToday = true;
  private isYesterday = false;
  private isWeekly = false;
  private isMonthly = false;

  constructor() { }

  ngOnInit() {
  }

}
