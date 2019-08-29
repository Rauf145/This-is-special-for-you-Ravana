import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    console.log(this.service.formModel);
    this.service.register().subscribe(
      (res: any) => {
        console.log(res);
        if (res.loggedIn) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
          if (this.toastr.currentlyActive == 0)
          {
            this.cookieService.set("CurrentUser", res.id);
            this.router.navigateByUrl('/home');
          }
        }
      },
      err => {
        if (err.status >= 0)
          this.toastr.error('User exist', 'Registration failed.');
        else
          console.log(err);
      }
    );
  }

}
