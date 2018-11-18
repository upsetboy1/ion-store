webpackJsonp([26],{

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    return AccountPageModule;
}());
AccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AccountPageModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_email_composer__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_rate__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_global__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountPage = (function () {
    function AccountPage(emailComposer, appVersion, appRate, translate, alert, platform, _notif, navCtrl, _address, modal, _user, navParams) {
        this.emailComposer = emailComposer;
        this.appVersion = appVersion;
        this.appRate = appRate;
        this.translate = translate;
        this.alert = alert;
        this.platform = platform;
        this._notif = _notif;
        this.navCtrl = navCtrl;
        this._address = _address;
        this.modal = modal;
        this._user = _user;
        this.navParams = navParams;
        this.notif = this._notif;
        this.address = this._address;
        this.user = this._user;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
    };
    AccountPage.prototype.rateUs = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            this.translate.get(['OK', 'ONLY_DEVICE', 'ONLY_DEVICE_DESC']).subscribe(function (x) {
                _this.alert.create({
                    title: x.ONLY_DEVICE,
                    message: x.ONLY_DEVICE_DESC,
                    buttons: [{ text: x.OK }]
                }).present();
                return false;
            });
        }
        else {
            this.appVersion.getAppName().then(function (res) {
                _this.appRate.preferences.displayAppName = res;
            });
            this.appVersion.getPackageName().then(function (res) {
                _this.appRate.preferences.storeAppURL = {
                    //ios: '<app_id>', // FOR IOS
                    android: 'market://details?id=' + res,
                };
                _this.appRate.promptForRating(true);
            });
        }
    };
    AccountPage.prototype.goProfile = function () {
        this.modal.create('AccountProfilePage').present();
    };
    AccountPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    AccountPage.prototype.emailUs = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.emailComposer.isAvailable().then(function (available) {
                // this.emailComposer.addAlias('gmail', 'com.google.android.gm');  // if you want to use gmail
                var email = {
                    //app: 'gmail', // if you want to use gmail
                    to: __WEBPACK_IMPORTED_MODULE_6__app_app_global__["a" /* App */].ContactEmail,
                    //bcc: ['john@doe.com', 'jane@doe.com'],
                    //  attachments: [
                    // 	 'file://img/logo.png',
                    // 	 'res://icon.png',
                    // 	 'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                    // 	 'file://README.pdf'
                    //  ],
                    subject: 'App Support',
                    body: 'Hi, please help me.',
                    isHtml: true
                };
                _this.emailComposer.open(email);
            });
        }
        else {
            this.translate.get(['ONLY_DEVICE', 'ONLY_DEVICE_DESC', 'OK']).subscribe(function (x) {
                _this.alert.create({
                    title: x.ONLY_DEVICE,
                    message: x.ONLY_DEVICE_DESC,
                    buttons: [{
                            text: x.OK
                        }]
                }).present();
            });
        }
    };
    AccountPage.prototype.login = function () {
        this.modal.create('LoginPage', {}).present();
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\account\account.html"*/'<ion-content padding-top>\n	<ion-list no-padding padding-left no-lines margin-bottom margin-top>\n		<ion-item no-padding (click)="goProfile()" *ngIf="_user.all">\n			<h1>{{_user.displayname ? _user.displayname : (_user.firstname+\' \'+_user.lastname)}}</h1>\n			<p>{{ \'VIEW_EDIT_PROFILE\' | translate}}</p>\n			<ion-avatar item-end>\n				<img src="assets/img/miscellaneous/user.png">\n			</ion-avatar>\n		</ion-item>\n		<ion-item no-padding (click)="login()" *ngIf="!_user.all">\n			<h1>{{ \'LOGIN/REGISTER\' | translate}}</h1>\n			<p>{{ \'LOGIN_DESC\' | translate}}</p>\n			<ion-avatar item-end>\n				<img src="assets/img/miscellaneous/user.png">\n			</ion-avatar>\n		</ion-item>\n	</ion-list>\n	<ion-list class="account-list">\n		<!-- <ion-item mode="ios" tappable (click)="goTo(\'AccountChatsPage\')">\n			Chats\n			<ion-badge>3</ion-badge>\n			<ion-icon name="fa-paypal" item-end></ion-icon>\n		</ion-item> -->\n		<button ion-item tappable (click)="goTo(\'AccountNotificationPage\')">\n			{{ \'NOTIFICATIONS\' | translate}}\n			<ion-badge item-end *ngIf="_notif.all.length > 0">{{_notif.all.length}}</ion-badge>\n		</button>\n\n		<button ion-item tappable (click)="goTo(\'SavedAddressPage\')">\n			{{ \'SAVED_ADDRESS\' | translate}}\n			<ion-badge item-end *ngIf="_address.all.length > 0">{{_address.all.length}}</ion-badge>\n		</button>\n\n		<button ion-item tappable (click)="goTo(\'AccountSettingsPage\')">\n			{{ \'SETTINGS\' | translate}}\n		</button>\n\n		<button ion-item tappable (click)="goTo(\'AccountHelpPage\')">\n			{{ \'FAQ\' | translate}}\n		</button>\n\n		<button ion-item tappable (click)="emailUs()">\n			{{ \'CONTACT\' | translate}}\n		</button>\n\n		<button ion-item tappable (click)="rateUs()">\n			{{ \'GIVE_FEEDBACK\' | translate}}\n		</button>\n\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\account\account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_providers__["e" /* NotifProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_providers__["a" /* AddressProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_providers__["i" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* NavParams */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=26.js.map