var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.formModel = {
            UserName: '',
            Password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null)
            this.router.navigateByUrl('/home');
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this.service.login(form.value).subscribe(function (res) {
            // localStorage.setItem('token', res.token);
            _this.router.navigateByUrl('/home');
        }, function (err) {
            if (err.status >= 400)
                _this.toastr.error('Incorrect username or password.', 'Authentication failed.');
            else
                console.log(err);
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [UserService, Router, ToastrService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map