import * as L from 'leaflet';
import 'leaflet-rotatedmarker';
import { Position } from '../Models/Position';
import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Device } from '../Models/Device';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DeviceUser } from '../Models/DeviceUser';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {
  private interval;
  private socket: SocketIOClient.Socket;
  public Map: L.Map;
  public Markers: Map<string, L.Marker> = new Map<string, L.Marker>();
  public lines: Map<string, L.Polyline[]> = new Map<string, L.Polyline[]>();
  public latlng2: Map<string, L.LatLng> = new Map<string, L.LatLng>();
  public latlng: L.LatLng;
  public marker: L.Marker;
  public pos: Position;
  public waypoints = [];
  public greenIcon = L.icon({
    iconUrl: 'http://go.gps.az/avl_library_image/3/0/library/unit/default.png?b=32&v=1&sid=bf2a1f6316f17a5c1e95873dd22b13ac',
    iconSize: [5, 5], // size of the icon
    iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  });
  public Devices: Device[] = [];
  public SelectedDevice: Device = null;

  readonly BaseURI = 'https://localhost:44374/api';
  constructor(private fb: FormBuilder, private http: HttpClient, private cookieService: CookieService) {
    this.GetDevices();
    this.socket = io('http://207.180.214.149:8001');
  }

  public GetDevices() {
    if (this.cookieService.check("CurrentUser")) {
      const headers = new HttpHeaders().set('content-type', 'application/json');
      var id = this.cookieService.get("CurrentUser");
      this.http.post(this.BaseURI + '/device/all', id, {
        headers
      }).subscribe(
        (res: any) => {
          this.Devices = res;
        }
      );;
    }
  }


  public AddNewPosition = (msg) => {
    const pos = JSON.parse(msg);
    console.log(pos);
    this.latlng = new L.LatLng(pos.latitude, pos.longitude);

    if (this.Markers.get(pos.deviceId) === undefined) {
      const marker = new L.Marker(this.latlng, { icon: this.greenIcon });
      marker.bindPopup(String(pos.deviceId));
      marker.addTo(this.Map);
      this.lines.set(pos.deviceId, []);
      this.Markers.set(pos.deviceId, marker);
      this.Map.setView(this.latlng, 18);
    }
    else {
      this.Markers.get(pos.deviceId).setLatLng(this.latlng);
      let line = null;
      if (this.latlng2.get(pos.deviceId) == null) {
        line = new L.Polyline([this.latlng, this.latlng]);
      }
      else {
        this.Markers.get(pos.deviceId).setRotationAngle(pos.course - 90)
        line = new L.Polyline([this.latlng2.get(pos.deviceId), this.latlng]);
      }
      line.addTo(this.Map);
      this.lines.get(pos.deviceId).push(line);
      this.latlng2.set(pos.deviceId, this.latlng);

      ///////////////////////////////////////testing///////////////////////////
    }
    let device = this.Devices.find(obj => {
      return obj.uniqueid == pos.deviceId;
    });
    if (device != null) {
      this.Devices[this.Devices.indexOf(device)].attributes = pos.attributes;
    }
    if (this.SelectedDevice != null && pos.deviceId == this.SelectedDevice.uniqueid) {
      this.Map.setView(this.latlng, 18);
    }
  }

  public Start(map: L.Map) {
    this.Map = map;
    /////////////////////////////////////////////////
    this.interval = setInterval(() => {
      this.lines.forEach(element => {
        if (element.length >= 5) {
          this.Map.removeLayer(<L.Polyline>element.shift());
        }
      });
    }, 800);
    /////////////////////////////////////////////////
    this.socket.on('test', this.AddNewPosition);
  }

  rotateMarker(latlng1: L.LatLng, latlng2: L.LatLng) {
    let g2r = Math.PI / 180;
    let lat1r = latlng1.lat * g2r;
    let lat2r = latlng2.lat * g2r;
    let lon1r = latlng1.lng * g2r;
    let lon2r = latlng2.lng * g2r;
    let dlonr = lon2r - lon1r;
    let y = Math.sin(dlonr) * Math.cos(lat2r);
    let x = Math.cos(lat1r) * Math.sin(lat2r) - Math.sin(lat1r) * Math.cos(lat2r) * Math.cos(dlonr);
    return Math.atan2(y, x) / g2r;
  }

  public setView = (device) => {
    this.SelectedDevice = device;
  }


  //bad code
  updateDevice(model: Device, type: String = "update") {
    if (!this.cookieService.check("CurrentUser"))
      return null;

    const headers = new HttpHeaders().set('content-type', 'application/json');
    var url = type == "update" ? "/device/update" : "/device/add";

    model.attributes = JSON.stringify(model.attributes);
    var deviceUser = new DeviceUser();
    deviceUser.device = model;
    deviceUser.id = +this.cookieService.get("CurrentUser");
    var body = JSON.stringify(deviceUser);

    this.http.post(this.BaseURI + url, body, {
      headers

    }).subscribe((res: any) => {

      let dev = this.Devices.find(obj => obj.uniqueid == res.uniqueid);

      if (dev != null && type == "update") {
        let index = this.Devices.indexOf(dev);
        this.Devices[index] = res;
      }
      else if (dev == null) {
        this.Devices.push(res)
      }
    });

  }

  removeDevice(device: Device) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    console.log(device);
    this.http.post(this.BaseURI + "/device/remove", device.id, {
      headers

    }).subscribe(
      (res: any) => {

      },
      err => {
        if(err.status == 200)
          var index = this.Devices.indexOf(device);
          this.Devices.splice(index);
      }
    );
  }

}






    // HomeComponent.map = new L.Map('map').setView([57.74, 11.94], 15);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(HomeComponent.map);

    // HomeComponent.marker = L.marker([57.74, 11.94], { icon: HomeComponent.greenIcon });
    // HomeComponent.marker.bindPopup('UserId: 12345');
    // let polygon = L.polygon([
    //   [57.74, 11.94],
    //   [57.77, 11.93],
    //   [57.73, 11.91],
    //   [57.72, 11.93]
    // ]);
    // polygon.bindPopup("Polygon");
    // polygon.addTo(HomeComponent.map);
    // let pointList = [
    //   new L.LatLng(57.74, 11.94),
    //   new L.LatLng(57.77, 11.93),
    //   new L.LatLng(57.73, 11.91),
    //   new L.LatLng(57.72, 11.93),
    // ];
