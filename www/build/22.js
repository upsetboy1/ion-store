webpackJsonp([22],{

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNotificationPageModule", function() { return AccountNotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification__ = __webpack_require__(975);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountNotificationPageModule = (function () {
    function AccountNotificationPageModule() {
    }
    return AccountNotificationPageModule;
}());
AccountNotificationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__notification__["a" /* AccountNotificationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__notification__["a" /* AccountNotificationPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AccountNotificationPageModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountNotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountNotificationPage = (function () {
    function AccountNotificationPage(_notif, alert) {
        this._notif = _notif;
        this.alert = alert;
        this.notif = [];
        console.log(_notif.all);
    }
    AccountNotificationPage.prototype.showAlert = function (x) {
        this.alert.create({
            title: x.title,
            subTitle: x.body,
            buttons: ['OK']
        }).present();
    };
    AccountNotificationPage.prototype.remove = function (x) {
        this._notif.remove(x.id);
    };
    AccountNotificationPage.prototype.ionViewDidLoad = function () {
        this.notif = this._notif.all;
        console.log('ionViewDidLoad AccountNotificationPage');
    };
    return AccountNotificationPage;
}());
AccountNotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-notification',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\account\notification\notification.html"*/'<ion-header no-border no-lines>\n	<ion-navbar></ion-navbar>\n</ion-header>\n \n <ion-content> \n   <ion-list>\n    <h1 margin-left margin-bottom>{{ \'NOTIF\' | translate}}</h1>\n    <ion-grid class="empty" *ngIf="notif.length == 0">\n			<ion-row align-items-center>\n				<ion-col align-self-center text-center>\n					<ion-icon name="notifications-off" color="secondary"></ion-icon>\n					<h4 margin-bottom>{{ \'EMPTY_NOTIF\' | translate}}</h4>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n    <ion-item-sliding *ngFor="let x of notif">\n      <ion-item (click)="showAlert(x)">\n        <ion-avatar item-start *ngIf="x.img">\n          <img [src]="x.img" />\n        </ion-avatar>\n        <h3>{{x.title}}</h3>\n        <p>{{x.body}}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button small color="assertive" tappable (click)="remove(x)">\n					<ion-icon name="trash"></ion-icon>\n					{{\'REMOVE\' | translate}}\n				</button>\n      </ion-item-options>\n    </ion-item-sliding>\n   </ion-list>\n </ion-content>\n '/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\account\notification\notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* NotifProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AccountNotificationPage);

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=22.js.map