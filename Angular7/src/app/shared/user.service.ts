import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private cookieService: CookieService) { }
  readonly BaseURI = 'https://localhost:44374/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', [Validators.email, Validators.required]],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Login: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/account/register', body, {
      headers
    });
  }

  login(formData) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = JSON.stringify(formData);
    var response = this.http.post(this.BaseURI + '/account/login', body, {
      headers
    });
    this.user = response.source;
    return response;
  }

  getUserProfile() {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (this.cookieService.check("CurrentUser")) {
      var id = this.cookieService.get("CurrentUser");
      return this.http.post(this.BaseURI + '/account/user', id, {
        headers
      });
    }
    return null;
  }
}
