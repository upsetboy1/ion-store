webpackJsonp([8],{

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrdersPageModule = (function () {
    function OrdersPageModule() {
    }
    return OrdersPageModule;
}());
OrdersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], OrdersPageModule);

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
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



var OrdersPage = (function () {
    function OrdersPage(nav, events, modal, loader, user, woo) {
        this.nav = nav;
        this.events = events;
        this.modal = modal;
        this.loader = loader;
        this.user = user;
        this.woo = woo;
        this.status = "paid";
        this.orders = [];
        this.setRootForGuest();
        this.listenIsLoggedIn();
        this.listenIsLoggedOut();
        this.setForUser();
    }
    OrdersPage.prototype.listenIsLoggedIn = function () {
        var _this = this;
        this.events.subscribe('user:login', function (res) {
            _this.setForUser();
        });
    };
    OrdersPage.prototype.listenIsLoggedOut = function () {
        var _this = this;
        this.events.subscribe('user:logout', function () {
            _this.setRootForGuest();
        });
    };
    OrdersPage.prototype.setRootForGuest = function () {
        this.orders = {
            paid: [],
            unpaid: []
        };
    };
    OrdersPage.prototype.setForUser = function (status) {
        var _this = this;
        if (status === void 0) { status = ''; }
        if (this.user.all) {
            this.woo.getOrders(this.user.id, null, null, status).then(function (x) {
                _this.loader.dismiss();
                _this.orders = x;
            }, function (err) {
                _this.loader.dismiss();
            });
        }
    };
    OrdersPage.prototype.doRefresh = function (status, refresher) {
        this.setForUser(status);
        refresher.complete();
    };
    OrdersPage.prototype.doPulling = function (refresher) {
        // console.log('DOPULLING', refresher.progress);
    };
    OrdersPage.prototype.login = function () {
        this.modal.create('LoginPage', {}).present();
    };
    OrdersPage.prototype.goHome = function () {
        this.nav.parent.select(0);
    };
    OrdersPage.prototype.goTo = function (params) {
        this.nav.push('OrderDetailPage', { params: params });
    };
    return OrdersPage;
}());
OrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orders',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\orders\orders.html"*/'<ion-header>\n    \n   <ion-toolbar no-padding>\n      <ion-segment [(ngModel)]="status">\n        <ion-segment-button value="paid">\n          {{ \'PAID\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="unpaid">\n          {{ \'UNPAID\' | translate}}\n        </ion-segment-button>\n      </ion-segment>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-refresher (ionRefresh)="doRefresh(\'\', $event)" (ionPull)="doPulling($event)">\n    <ion-refresher-content\n    pullingIcon="refresh-circle"\n    refreshingSpinner="circles"\n    pullingText="Pull to refresh..."\n    refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid class="empty" *ngIf="!user.all">\n    <ion-row align-items-center>\n      <ion-col align-self-center text-center>\n        <ion-icon name="contact" color="secondary"></ion-icon>\n        <h4 margin-bottom>{{ \'LOGIN_DESC\' | translate}}</h4>\n        <button color="secondary" ion-button outline tappable (click)="login()">{{ \'LOGIN/REGISTER\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div [ngSwitch]="status">\n    <ion-list *ngSwitchCase="\'paid\'">\n      <ion-grid class="empty" *ngIf="orders.paid.length == 0 && user.all">\n        <ion-row align-items-center>\n          <ion-col align-self-center text-center>\n            <ion-icon name="list" color="secondary"></ion-icon>\n            <h4 margin-bottom>{{ \'ORDER_EMPTY\' | translate}}</h4>\n            <button  color="secondary" ion-button outline tappable (click)="goHome()">{{ \'START_SHOPPING\' | translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <button *ngFor="let x of orders.paid" ion-item tappable (click)="goTo(x)">\n        <h3>{{x.date_created | date:\'short\'}}</h3>\n        <p>#{{x.id}} • {{x.total | money}}</p>\n        <ion-badge item-end>{{x.status}}</ion-badge>\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'unpaid\'">\n      <ion-grid class="empty" *ngIf="orders.unpaid.length == 0 && user.all">\n        <ion-row align-items-center>\n          <ion-col align-self-center text-center>\n            <ion-icon name="list" color="secondary"></ion-icon>\n            <h4 margin-bottom>{{ \'ORDER_EMPTY\' | translate}}</h4>\n            <button color="secondary" ion-button outline tappable (click)="goHome()">{{ \'START_SHOPPING\' | translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <button *ngFor="let x of orders.unpaid" ion-item tappable (click)="goTo(x)">\n        <h3>{{x.date_created | date:\'short\'}}</h3>\n        <p>#{{x.id}} • {{x.total | money}}</p>\n        <ion-badge item-end>{{x.status}}</ion-badge>\n      </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\orders\orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* WooCommerceProvider */]])
], OrdersPage);

//# sourceMappingURL=orders.js.map

/***/ })

});
//# sourceMappingURL=8.js.map