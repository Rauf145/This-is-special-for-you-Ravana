var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
var UserService = /** @class */ (function () {
    function UserService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.BaseURI = 'https://localhost:44374/api';
        this.formModel = this.fb.group({
            UserName: ['', Validators.required],
            Email: ['', Validators.email],
            FullName: [''],
            Passwords: this.fb.group({
                Password: ['', [Validators.required, Validators.minLength(4)]],
                ConfirmPassword: ['', Validators.required]
            }, { validator: this.comparePasswords })
        });
    }
    UserService.prototype.comparePasswords = function (fb) {
        var confirmPswrdCtrl = fb.get('ConfirmPassword');
        //passwordMismatch
        //confirmPswrdCtrl.errors={passwordMismatch:true}
        if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('Password').value != confirmPswrdCtrl.value)
                confirmPswrdCtrl.setErrors({ passwordMismatch: true });
            else
                confirmPswrdCtrl.setErrors(null);
        }
    };
    UserService.prototype.register = function () {
        var body = {
            UserName: this.formModel.value.UserName,
            Email: this.formModel.value.Email,
            FullName: this.formModel.value.FullName,
            Password: this.formModel.value.Passwords.Password
        };
        return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
    };
    UserService.prototype.login = function (formData) {
        return this.http.post(this.BaseURI + '/Account/Login', "{Login: `test`, Password: `test123`}");
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(this.BaseURI + '/UserProfile');
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [FormBuilder, HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map