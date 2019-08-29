import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/app/Models/Modal';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  public modal: Modal = new Modal();

  constructor() { }

  ngOnInit() {
  }

}
