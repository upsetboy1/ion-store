webpackJsonp([20],{

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_address__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddAddressPageModule = (function () {
    function AddAddressPageModule() {
    }
    return AddAddressPageModule;
}());
AddAddressPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AddAddressPageModule);

//# sourceMappingURL=add-address.module.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAddressPage; });
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





var AddAddressPage = (function () {
    function AddAddressPage(setting, viewCtrl, loader, toast, translate, user, order, navParams, address, fb, woo) {
        var _this = this;
        this.setting = setting;
        this.viewCtrl = viewCtrl;
        this.loader = loader;
        this.toast = toast;
        this.translate = translate;
        this.user = user;
        this.order = order;
        this.navParams = navParams;
        this.address = address;
        this.fb = fb;
        this.woo = woo;
        this.countries = [];
        this.states = [];
        this.translate.get(['SELECT', 'COUNTRY', 'SELECT_YOUR_COUNTRY', 'STATE', 'SELECT_YOUR_STATE']).subscribe(function (x) {
            _this.countryOpts = {
                title: x.SELECT + ' ' + x.COUNTRY,
                subTitle: x.SELECT_YOUR_COUNTRY
            };
            _this.stateOpts = {
                title: x.SELECT + ' ' + x.STATE,
                subTitle: x.SELECT_YOUR_STATE
            };
        });
        this.data = navParams.data.params;
        this.loadCountry();
        this.form = this.fb.group({
            first_name: [this.data.first_name || (this.user.all ? this.user.firstname : ''), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            last_name: this.data.last_name || (this.user.all ? this.user.lastname : ''),
            email: [this.user.all ? this.user.email : '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            phone: [this.data.phone, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            city: [this.data.city, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            state: [this.data.state, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            postcode: [this.data.postcode, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            address_1: [this.data.address_1, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            country: [this.data.country, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
    }
    AddAddressPage.prototype.loadCountry = function () {
        var _this = this;
        if (this.setting.all.countries) {
            this.countries = this.setting.getCountries();
        }
        else {
            this.loader.present();
            this.woo.saveCountries().then(function (val) {
                if (val) {
                    if (val.value.length == 0) {
                        for (var i in val.options)
                            _this.countries.push({ id: i, name: val.options[i] });
                    }
                    else {
                        for (var i in val.value)
                            _this.countries.push({ id: i, name: val.value[i] });
                    }
                }
                _this.loader.dismiss();
            }, function (err) {
                _this.loader.dismiss();
                console.log(err);
            });
        }
        if (this.data.action == 2)
            this.getStates();
    };
    AddAddressPage.prototype.getStates = function () {
        var _this = this;
        var id = this.data.country || this.form.value.country;
        this.woo.getStates(id).map(function (res) { return res.json(); }).subscribe(function (res) {
            for (var i in res)
                _this.states.push({ id: i, name: res[i] });
        }, function (err) {
            console.error("Error : " + err);
            _this.states = [];
        });
    };
    AddAddressPage.prototype.submit = function () {
        var _this = this;
        if (this.address.all.length == 0)
            this.form.value.primary = true;
        if (this.data.primary)
            this.form.value.primary = this.data.primary;
        if (this.data.action == 1) {
            this.address.add(this.form.value); // FOR NEW ADDRESS
            this.translate.get('NEW_ADDRESS_ADDED').subscribe(function (x) {
                _this.toast.show(x);
            });
        }
        if (this.data.action == 2) {
            this.address.update(this.navParams.data.index, this.form.value); // UPDATE ADDRESS
            this.translate.get('ADDRESS_WAS_UPDATED').subscribe(function (x) {
                _this.toast.show(x);
            });
        }
        if (this.data.action == 3) {
            this.address.add(this.form.value);
            this.order.setBilling(this.form.value);
        }
        if (this.data.action == 4) {
            this.address.add(this.form.value);
            this.order.setShipping(this.form.value);
        }
        this.dismiss();
    };
    AddAddressPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AddAddressPage;
}());
AddAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-address',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\account\saved-address\add-address\add-address.html"*/'<ion-header no-border no-lines>\n    <ion-navbar start>\n      <ion-buttons start>\n        <button start color="primary" start icon-only ion-button (click)="dismiss()">\n            <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="form" (ngSubmit)="submit()" novalidate>  \n  <ion-list>\n      <h1 margin-left margin-bottom>{{data.action==2 ? (\'EDIT\' | translate) : (\'ADD\' | translate)}} {{ \'ADDRESS\' | translate}}</h1>\n      <ion-item>\n          <ion-input formControlName="first_name" type="text" placeholder="{{ \'FIRST_NAME\' | translate}}" required></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-input formControlName="last_name" type="text" placeholder="{{ \'LAST_NAME\' | translate}}"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="!user.all">\n          <ion-input formControlName="email" type="email" placeholder="{{ \'EMAIL\' | translate}}"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-input formControlName="phone" type="number" inputmode="numeric" pattern="[0-9]*"placeholder="{{ \'PHONE\' | translate}}" required></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label>{{ \'COUNTRY\' | translate}}</ion-label>\n            <ion-select formControlName="country" [selectOptions]="countryOpts" placeholder="{{ \'SELECT\' | translate}} {{ \'COUNTRY\' | translate}}" cancelText="{{ \'CANCEL\' | translate}}" okText="{{ \'SELECT\' | translate}}" required (ionChange)="getStates()">\n              <ion-option *ngFor="let x of countries" [value]="x.id" [innerHTML]="x.name"></ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf="states.length > 0 || this.data.state">\n            <ion-label>{{ \'STATE\' | translate}}</ion-label>\n            <ion-select formControlName="state" [selectOptions]="stateOpts" placeholder="{{ \'SELECT\' | translate}} {{ \'STATE\' | translate}}" cancelText="{{ \'CANCEL\' | translate}}" okText="{{ \'SELECT\' | translate}}" required>\n              <ion-option *ngFor="let x of states" [value]="x.id" [innerHTML]="x.name"></ion-option>\n            </ion-select>\n        </ion-item>\n        \n        <ion-item *ngIf="states.length == 0">\n          <ion-input formControlName="state" type="text" placeholder="{{ \'STATE\' | translate}}" required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input formControlName="city" type="text" placeholder="{{ \'CITY\' | translate}}" required></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-input formControlName="postcode" type="number" inputmode="numeric" pattern="[0-9]*" placeholder="{{ \'POSTCODE\' | translate}}" required></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-textarea formControlName="address_1" name="description" placeholder="{{ \'ADDRESS\' | translate}}" required></ion-textarea>\n        </ion-item>\n\n        <div padding>\n          <button ion-button block [disabled]="!form.valid">{{ \'SAVE\' | translate}}</button>\n        </div>\n  </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\account\saved-address\add-address\add-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* WooCommerceProvider */]])
], AddAddressPage);

//# sourceMappingURL=add-address.js.map

/***/ })

});
//# sourceMappingURL=20.js.map