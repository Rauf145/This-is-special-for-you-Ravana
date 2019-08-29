import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  private isTrips = true;
  private isSingle = false;
  private isSpeed = false;
  private isToday = true;
  private isYesterday = false;
  private isWeek = false;
  private isMonth = false;

  constructor() { }

  ngOnInit() {
  }

  onItemChange(value: String)
  {
    if(value=='trips')
    {
      this.isTrips=true;
      this.isSingle=false;
      this.isSpeed=false;
    }
    else if(value=='single')
    {
      this.isTrips=false;
      this.isSingle=true;
      this.isSpeed=false;
    }
    else
    {
      this.isTrips=false;
      this.isSingle=false;
      this.isSpeed=true;
    }
  }

}
