import { UserService } from './../shared/user.service';
import { DeviceService } from './../shared/device.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as L from 'leaflet';
import 'leaflet-rotatedmarker';



@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  private userDetails;
  public selectedDevice;

  constructor(private router: Router, private userService: UserService,
    private deviceService: DeviceService, private cookieService: CookieService) {
  }
  ngOnInit() {
    const Map = new L.Map('map').setView([57.74, 11.94], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(Map);
    L.tileLayer('https://localhost:44374/api/values/get/{z}/{x}/{y}.png').addTo(Map);
    // L.tileLayer()
    this.deviceService.Start(Map);
  }

  getDevices() {
    return this.deviceService.Devices;
  }

  onSelect(device) {
    this.selectedDevice = device;
    this.deviceService.setView(device);
  }


  onLogout() {
    this.cookieService.delete('CurrentUser');
    this.router.navigate(['/user/login']);
  }
}
