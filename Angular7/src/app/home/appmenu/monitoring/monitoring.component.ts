import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DeviceService } from 'src/app/shared/device.service';
import { Device } from 'src/app/Models/Device';
import { Modal } from 'src/app/Models/Modal';
import { NgForm } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})


export class MonitoringComponent implements OnInit {

  public modal: Modal = new Modal();

  public dropdown: boolean; //testing

  public hover: boolean; //testing

  public CurrentDevice: Device;

  constructor(private service: DeviceService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
  }

  CurDevice() {
    return this.service.SelectedDevice;
  }

  getDevices() {
    return this.service.Devices;
  }

  onSelect(device) {
    // this.service.SelectedDevice = device;
    if (this.service.SelectedDevice != device) {
      this.service.setView(device);
    } else {
      this.service.SelectedDevice = null;
    }

  }

  checkLength(device)
  {
    if(device.name.length<9)
      return true;
    else
      return false;  
  }

  onSubmit(form) {
    if (this.modal.model != null) {
      for (let key of Object.keys(form.value)) {
        if (this.modal.model[key] != form.value[key] && form.value[key] != null && form.value[key] != "")
          this.modal.model[key] = form.value[key];
      }
      this.service.updateDevice(this.modal.model)
    }
    this.modal.closeModal();
  }

  ResetMiliageMoto() {
    this.modal.model.motoTime = 0;
    this.modal.model.mileage = 0;
  }

  click(device) {
    this.CurrentDevice = device;
    this.dropdown = !this.dropdown;
  }

  deviceHover(device) {
    this.CurrentDevice = device;
    this.hover = true;
    this.dropdown = false;
    // console.log("test");
    // var test = this.service.Map.getPixelBounds();
    // var nw = new L.Point(Math.floor(test.min.x / 256), Math.floor(test.min.y / 256));
    // var se = new L.Point(Math.floor(test.max.x / 256), Math.floor(test.max.y / 256));
    // let zoom = this.service.Map.getZoom();
    // console.log(se.x + "  " + se.y)
    // console.log(this.tile2lat(se.y, zoom))
    // console.log(this.tile2long(se.x, zoom))
    // console.log(this.lat2tile(39.1761, 18));
    // console.log(this.long2tile(45.45723, 18));
    // console.log(this.tile2lat(this.lat2tile(39.1761, 18), 18));
    // console.log(this.tile2long(this.long2tile(45.45723, 18), 18));
    // console.log(this.tile2long(Math.floor((164152 + (256)) / 256), 18))
    // console.log(this.tile2lat(Math.floor((100003 + (256)) / 256), 18))
    // this.service.Map.setView([39.17691709496078, 45.4559326171875], 18)

    let d =this.getDistanceFromLatLonInKm(42.0716996794, 44.5243410194, 42.0716996794, 50.7096437529)
    console.log(d);
    // this.service.Map.setView(new L.LatLng(57.733484833831575, 11.953125), 15)
    // let marker = new L.Marker(new L.LatLng(57.733484833831575, 11.953125), { icon: this.service.greenIcon }).addTo(this.service.Map);
  }


  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  deviceHoverOut(device) {
    this.CurrentDevice = device;
    this.hover = false;
    console.log("test2");

  }

  tile2long(x, z) { return (x / Math.pow(2, z) * 360 - 180); }

  tile2lat(y, z) {
    var n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
    return (180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))));
  }

  long2tile(lon, zoom) { return (Math.floor((lon + 180) / 360 * Math.pow(2, zoom))); }
  lat2tile(lat, zoom) { return (Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom))); }
}
