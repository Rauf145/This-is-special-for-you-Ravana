var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UserService } from './../../shared/user.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.service.formModel.reset();
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.register().subscribe(function (res) {
            if (res.succeeded) {
                _this.service.formModel.reset();
                _this.toastr.success('New user created!', 'Registration successful.');
            }
            else {
                res.errors.forEach(function (element) {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            _this.toastr.error('Username is already taken', 'Registration failed.');
                            break;
                        default:
                            _this.toastr.error(element.description, 'Registration failed.');
                            break;
                    }
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    RegistrationComponent = __decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [UserService, ToastrService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map