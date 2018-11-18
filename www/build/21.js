webpackJsonp([21],{

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountProfilePageModule", function() { return AccountProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile__ = __webpack_require__(977);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountProfilePageModule = (function () {
    function AccountProfilePageModule() {
    }
    return AccountProfilePageModule;
}());
AccountProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* AccountProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__profile__["a" /* AccountProfilePage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AccountProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(101);
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





var AccountProfilePage = (function () {
    function AccountProfilePage(view, translate, loader, toast, _user, fb, navCtrl, navParams) {
        this.view = view;
        this.translate = translate;
        this.loader = loader;
        this.toast = toast;
        this._user = _user;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = this._user.all;
        this.form = this.fb.group({
            first: [this.user.firstname, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            last: this.user.lastname,
            bio: this.user.description
        });
    }
    AccountProfilePage.prototype.submit = function () {
        var _this = this;
        this.loader.present();
        this._user.update(this.form.value).map(function (x) { return x.json(); }).subscribe(function (x) {
            _this._user.setUserUpdate(_this.form.value);
            _this.translate.get(['PROFILE_UPDATED']).subscribe(function (x) {
                _this.toast.show(x.PROFILE_UPDATED);
            });
            _this.loader.dismiss();
            _this.dismiss();
        });
    };
    AccountProfilePage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    return AccountProfilePage;
}());
AccountProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-profile',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\account\profile\profile.html"*/'<ion-header no-border no-lines>\n  <ion-navbar>\n      <ion-buttons start>\n        <button color="primary" start icon-only ion-button (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form" (ngSubmit)="submit()" novalidate>  \n    <ion-list>\n      <h1 margin-left margin-bottom>{{ \'EDIT_PROFILE\' | translate}}</h1>\n      <ion-item>\n        <ion-label floating>{{ \'FIRST_NAME\' | translate}}</ion-label>\n        <ion-input formControlName="first" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'LAST_NAME\' | translate}}</ion-label>\n        <ion-input formControlName="last" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'BIO\' | translate}}</ion-label>\n        <ion-textarea formControlName="bio"></ion-textarea>\n      </ion-item>\n\n      <div padding>\n        <button ion-button block [disabled]="!form.valid">{{ \'SAVE\' | translate}}</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\account\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["h" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["i" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
], AccountProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=21.js.map