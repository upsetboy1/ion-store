webpackJsonp([10],{

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(fb, translate, navParams, toast, user, loader, alertCtrl, app, viewCtrl) {
        this.fb = fb;
        this.translate = translate;
        this.navParams = navParams;
        this.toast = toast;
        this.user = user;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.loginForm = this.fb.group({
            user: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            pass: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        this.signupForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            user: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email],
            pass: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            pass2: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        this.resetForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]
        });
    }
    LoginPage.prototype.goToLogin = function () {
        this.slider.slideTo(1);
    };
    LoginPage.prototype.goToSignup = function () {
        this.slider.slideTo(2);
    };
    LoginPage.prototype.slideNext = function () {
        this.innerSlider.slideNext();
    };
    LoginPage.prototype.slidePrevious = function () {
        this.innerSlider.slidePrev();
    };
    LoginPage.prototype.submitSignup = function () {
        var _this = this;
        this.loader.present();
        this.user.nonce('user', 'register').map(function (x) { return x.json(); }).subscribe(function (x) {
            _this.signupForm.value.nonce = x.nonce;
            _this.user.signup(_this.signupForm.value).map(function (y) { return y.json(); })
                .subscribe(function (y) {
                var tmp = {
                    user: _this.signupForm.value.user,
                    pass: _this.signupForm.value.pass
                };
                _this.user.login(tmp).map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    if (res.status == 'ok') {
                        _this.user._loggedIn(res, _this.navParams.data.tabIndex);
                        _this.translate.get(['REGIST_SUCCESS'], { value: _this.signupForm.value.name }).subscribe(function (x) {
                            _this.toast.show(x.REGIST_SUCCESS);
                        });
                        _this.dismiss();
                        _this.loader.dismiss();
                    }
                    else {
                        _this.toast.show(res.error);
                    }
                }, function (err) {
                    _this.loader.dismiss();
                    _this.toast.show(err.json().error);
                });
            }, function (err) {
                _this.loader.dismiss();
                _this.toast.show(err.json().error);
            });
        }, function (err) {
            _this.loader.dismiss();
            _this.toast.show(err.json().error);
        });
    };
    LoginPage.prototype.submitReset = function () {
        var _this = this;
        this.loader.present();
        this.user.reset(this.resetForm.value).map(function (res) { return res.json(); })
            .subscribe(function (res) {
            if (res.status == 'ok')
                _this.toast.show(res.msg);
            else
                _this.toast.show(res.error);
            _this.loader.dismiss();
        }, function (err) {
            _this.loader.dismiss();
            _this.toast.show(err.json().error);
        });
    };
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        this.loader.present();
        this.user.login(this.loginForm.value).map(function (res) { return res.json(); })
            .subscribe(function (res) {
            if (res.status == 'ok') {
                _this.user._loggedIn(res, _this.navParams.data.tabIndex);
                _this.translate.get(['LOGIN_SUCCESS'], { value: _this.user.name }).subscribe(function (x) {
                    _this.toast.show(x.LOGIN_SUCCESS);
                });
                _this.dismiss();
            }
            else
                _this.toast.show(res.error);
            _this.loader.dismiss();
        }, function (err) {
            _this.loader.dismiss();
            _this.toast.show(err.json().error);
        });
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
], LoginPage.prototype, "slider", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('innerSlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
], LoginPage.prototype, "innerSlider", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\login\login.html"*/'<ion-content scroll="false">\n    <ion-header no-border no-lines>\n        <ion-navbar color="light" padding>\n          <ion-buttons>\n            <button start color="primary" ion-button icon-only tappable (click)="dismiss()">\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-navbar>\n      </ion-header>\n    <ion-slides #slider  direction="vertical" mode="ios">\n      <ion-slide class="swiper-no-swiping" mode="ios">\n        <div padding>\n          <img class="logo" src="assets/img/logo/logo.png" width="100"/>\n          <ion-slides class="text-slider" autoplay="2000" loop="true" mode="ios">\n            <ion-slide>\n              <h3>Ionstore 2</h3>\n              <p>Ionic Premium WooCommerce App for Android and iOS</p>\n            </ion-slide>\n            <ion-slide>\n              <h3>New Features</h3>\n              <p>Using font awesome, google font and Google Cloud Messaging</p>\n            </ion-slide>\n            <ion-slide>\n              <h3>Latest Technology</h3>\n              <p>Works with latest Wordpress, WooCommerce and Ionic Framework</p>\n            </ion-slide>\n          </ion-slides>\n          <ion-row>\n            <ion-col col-6>\n              <button ion-button block color="primary" outline tappable (click)="goToLogin()">{{ \'LOGIN\' | translate }}</button>\n            </ion-col>\n            <ion-col col-6>\n              <button ion-button block tappable (click)="goToSignup()">{{ \'CREATE_ACC\' | translate }}</button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-slide>\n      <ion-slide class="zoom swiper-no-swiping" mode="ios">\n        <ion-slides #innerSlider class="content-slider" mode="ios"> \n          <ion-slide class="swiper-no-swiping" mode="ios">\n              <ion-content>\n                <div padding-left padding-right text-left class="body">\n                <h1 padding-horizontal>{{ \'LOGIN\' | translate }}</h1>\n                <p padding-horizontal>{{ \'LOGIN_WOO\' | translate }}</p>\n                <form [formGroup]="loginForm" (ngSubmit)="submitLogin()">  \n                <ion-item padding-right>\n                  <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n                  <ion-input formControlName="user" autocomplete="off" type="text" required></ion-input>\n                </ion-item>\n                <ion-item padding-right>\n                  <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n                  <ion-input formControlName="pass" autocomplete="off" type="password" required></ion-input>\n                </ion-item>\n                <div padding>\n                  <button [disabled]="!loginForm.valid" ion-button block>{{ \'LOGIN\' | translate }}</button>\n                  <button no-padding small type="button" ion-button clear tappable (click)="slideNext()" color="light">{{ \'FORGOT\' | translate }}</button>\n                </div>\n                </form>\n                <button small clear text-left margin-top ion-button icon-right clear tappable (click)="goToSignup()">\n                  {{ \'GOSIGNUP\' | translate }}\n                  <ion-icon end name="arrow-down"></ion-icon>\n                </button>\n                </div>\n              </ion-content>\n          </ion-slide>\n          <ion-slide class="swiper-no-swiping" mode="ios">\n              <ion-content>\n                <div padding>\n                  <h1 text-left padding-horizontal>{{ \'RESET_PASS\' | translate }}</h1>\n                  <p text-left padding-horizontal>{{ \'FORGOT_DESC\' | translate }}</p>\n                  <form [formGroup]="resetForm" (ngSubmit)="submitReset()">\n                  <ion-item padding-right>\n                    <ion-label floating>{{ \'EMAIL\' | translate }}</ion-label>\n                    <ion-input type="email" formControlName="email" autocomplete="off"></ion-input>\n                  </ion-item>\n                  <div padding>\n                    <button [disabled]="!resetForm.valid" ion-button block tappable>{{ \'RESET_PASS\' | translate }}</button>\n                    <button small type="button" ion-button icon-left float-left no-padding clear tappable (click)="slidePrevious()" color="light"><ion-icon name="arrow-back"></ion-icon> {{ \'GOBACK\' | translate }}</button>\n                  </div>\n                  </form>\n                </div>\n              </ion-content>\n          </ion-slide>\n        </ion-slides>\n      </ion-slide>\n      <ion-slide class="zoom swiper-no-swiping" mode="ios">\n        <ion-content>\n          <div padding-left padding-right text-left>\n            <button small type="button" text-left margin-bottom ion-button icon-right clear tappable (click)="goToLogin()">\n                {{ \'GOLOGIN\' | translate }}\n              <ion-icon end name="arrow-up"></ion-icon>\n            </button>\n            <h1 padding-horizontal>{{ \'CREATE_ACC\' | translate }}</h1>\n            <!-- <p padding-horizontal>Lets join us to get tons of features.</p> -->\n            <form [formGroup]="signupForm" (ngSubmit)="submitSignup()" novalidate>  \n              <ion-item padding-right>\n                <ion-label floating>{{ \'NAME\' | translate }}</ion-label>\n                <ion-input formControlName="name" autocomplete="off" type="text" required></ion-input>\n              </ion-item>\n              <ion-item padding-right>\n                <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n                <ion-input formControlName="user" autocomplete="off" type="text" required></ion-input>\n              </ion-item>\n              <ion-item padding-right>\n                <ion-label floating>{{ \'EMAIL\' | translate }}</ion-label>\n                <ion-input formControlName="email" autocomplete="off" type="email" required></ion-input>\n              </ion-item>\n              <ion-item padding-right>\n                <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n                <ion-input formControlName="pass" autocomplete="off" type="password" required></ion-input>\n              </ion-item>\n              <ion-item padding-right>\n                <ion-label floating>{{ \'CONF_PASSWORD\' | translate }}</ion-label>\n                <ion-input formControlName="pass2" autocomplete="off" type="password" required></ion-input>\n              </ion-item>\n              <div padding>\n                <button ion-button block [disabled]="!signupForm.valid || (signupForm.controls[\'pass\'].value != signupForm.controls[\'pass2\'].value)">{{ \'SIGNUP\' | translate }}</button>\n              </div>\n            </form>\n          </div>\n        </ion-content>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=10.js.map