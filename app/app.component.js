"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var facebook_service_1 = require('./facebook.service');
var AppComponent = (function () {
    function AppComponent(_ngZone, _facebookService) {
        this._ngZone = _ngZone;
        this._facebookService = _facebookService;
        this.name = "";
        this.isUser = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._facebookService.loadAndInitFBSDK();
    };
    AppComponent.prototype.login = function () {
        var self = this;
        FB.login(function (response) {
            if (response.authResponse) {
                FB.api('/me', function (response) {
                    self._ngZone.run(function () {
                        self.name = response.name;
                        self.isUser = true;
                    });
                });
            }
            else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [facebook_service_1.FacebookService]
        }), 
        __metadata('design:paramtypes', [core_1.NgZone, facebook_service_1.FacebookService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map