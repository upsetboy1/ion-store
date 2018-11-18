webpackJsonp([17],{

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsNotificationsPageModule", function() { return AccountSettingsNotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(981);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountSettingsNotificationsPageModule = (function () {
    function AccountSettingsNotificationsPageModule() {
    }
    return AccountSettingsNotificationsPageModule;
}());
AccountSettingsNotificationsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* AccountSettingsNotificationsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* AccountSettingsNotificationsPage */]),
        ],
    })
], AccountSettingsNotificationsPageModule);

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingsNotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountSettingNotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountSettingsNotificationsPage = (function () {
    function AccountSettingsNotificationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountSettingsNotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountSettingsNotificationsPage');
    };
    return AccountSettingsNotificationsPage;
}());
AccountSettingsNotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-settings-notifications',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\account\settings\notifications\notifications.html"*/'\n<ion-header no-border no-lines>\n  <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <h1 margin-left margin-bottom>Notifications</h1>\n        <div padding-left padding-top>\n          <h4>Messages</h4>\n          <p>Receive messages from our store.</p>\n        </div>\n        <ion-item>\n          <ion-label> Email</ion-label>\n          <ion-toggle checked="true"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Push notifications</ion-label>\n          <ion-toggle checked="true"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Text messages</ion-label>\n          <ion-toggle checked="true"></ion-toggle>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n      <div padding-left padding-top>\n        <h4>Promotion and tips</h4>\n        <p>Receive coupons, promotions, surveys, product updates and inspirations.</p>\n      </div>\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-toggle checked="true"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Push notifications</ion-label>\n        <ion-toggle checked="true"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Text messages</ion-label>\n        <ion-toggle checked="true"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Phone calls</ion-label>\n        <ion-toggle checked="false"></ion-toggle>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\account\settings\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
], AccountSettingsNotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ })

});
//# sourceMappingURL=17.js.map