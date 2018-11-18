webpackJsonp([25],{

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountChatsPageModule", function() { return AccountChatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountChatsPageModule = (function () {
    function AccountChatsPageModule() {
    }
    return AccountChatsPageModule;
}());
AccountChatsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chats__["a" /* AccountChatsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chats__["a" /* AccountChatsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AccountChatsPageModule);

//# sourceMappingURL=chats.module.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountChatsPage; });
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


var AccountChatsPage = (function () {
    function AccountChatsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chats = [{
                id: 1,
                imageUrl: 'assets/img/miscellaneous/user.png',
                title: 'Customer Service',
                lastMessage: 'Hello ....?',
                timestamp: new Date()
            },
            {
                id: 2,
                imageUrl: 'assets/img/miscellaneous/user.png',
                title: 'Team Support',
                lastMessage: 'Sorry',
                timestamp: new Date()
            },
            {
                id: 3,
                imageUrl: 'assets/img/miscellaneous/user.png',
                title: 'Admin',
                lastMessage: 'Good luck',
                timestamp: new Date()
            }];
    }
    AccountChatsPage.prototype.goTo = function (chat) {
        this.navCtrl.push('AccountChatsMessagePage', { id: chat.id });
    };
    return AccountChatsPage;
}());
AccountChatsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-chats',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\account\chats\chats.html"*/'<ion-header no-border no-lines>\n	<ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <h1 margin-left margin-bottom>Chats</h1>\n    <ion-list-header margin-left no-padding>Today</ion-list-header>\n    <ion-item *ngFor="let chat of chats" (click)="goTo(chat)">\n      <ion-avatar item-start>\n        <img [src]="chat.imageUrl">\n      </ion-avatar>\n      <h3>{{chat.title}}</h3>\n      <p>{{chat.lastMessage}}</p>\n      <ion-note item-end>{{chat.timestamp | moment:"hh:mm a" | lowercase}}</ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header margin-left no-padding>Yesterday</ion-list-header>\n    <ion-item *ngFor="let chat of chats" (click)="goTo(chat)">\n      <ion-avatar item-start>\n        <img [src]="chat.imageUrl">\n      </ion-avatar>\n      <h3>{{chat.title}}</h3>\n      <p>{{chat.lastMessage}}</p>\n      <ion-note item-end>{{chat.timestamp | moment:"hh:mm a" | lowercase}}</ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header margin-left no-padding>Las Week</ion-list-header>\n    <ion-item *ngFor="let chat of chats" (click)="goTo(chat)">\n      <ion-avatar item-start>\n        <img [src]="chat.imageUrl">\n      </ion-avatar>\n      <h3>{{chat.title}}</h3>\n      <p>{{chat.lastMessage}}</p>\n      <ion-note item-end>{{chat.timestamp | moment:"hh:mm a" | lowercase}}</ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\account\chats\chats.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
], AccountChatsPage);

//# sourceMappingURL=chats.js.map

/***/ })

});
//# sourceMappingURL=25.js.map