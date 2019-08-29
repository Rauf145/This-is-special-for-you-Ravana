import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/app/Models/Modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public modal: Modal = new Modal();
  isGeneral:boolean= true;
  isEntry:boolean= false;
  isImprove:boolean= false;
  islog:boolean= false;
  isSpecial:boolean= false;

  constructor() { }

  ngOnInit() {
  }

  general()
  {
    this.isGeneral=true;
    this.isEntry=false;
    this.isImprove=false;
    this.isSpecial=false;
    this.islog=false;
  }
  entry()
  {
    this.isGeneral=false;
    this.isEntry=true;
    this.isImprove=false;
    this.isSpecial=false;
    this.islog=false;
  }
  improve()
  {
    this.isGeneral=false;
    this.isEntry=false;
    this.isImprove=true;
    this.isSpecial=false;
    this.islog=false;
  }
  log()
  {
    this.isGeneral=false;
    this.isEntry=false;
    this.isImprove=false;
    this.isSpecial=false;
    this.islog=true;
  }
  special()
  {
    this.isGeneral=false;
    this.isEntry=false;
    this.isImprove=false;
    this.isSpecial=true;
    this.islog=false;
  }
}
