webpackJsonp([9],{

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail__ = __webpack_require__(990);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderDetailPageModule = (function () {
    function OrderDetailPageModule() {
    }
    return OrderDetailPageModule;
}());
OrderDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__detail__["a" /* OrderDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__detail__["a" /* OrderDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
        ],
    })
], OrderDetailPageModule);

//# sourceMappingURL=detail.module.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
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


var OrderDetailPage = (function () {
    function OrderDetailPage(nav, params) {
        this.nav = nav;
        this.params = params;
        this.order = "detail";
        this.data = this.params.data.params;
        console.log(this.params.data.params);
    }
    OrderDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailPage');
    };
    return OrderDetailPage;
}());
OrderDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-detail',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\orders\detail\detail.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{ \'ORDER\' | translate }} #{{data.id}}</ion-title>\n   </ion-navbar>\n   <ion-toolbar no-padding>\n        <ion-segment [(ngModel)]="order">\n          <ion-segment-button value="detail">\n            {{ \'DETAIL\' | translate }}\n          </ion-segment-button>\n          <ion-segment-button value="billing">\n            {{ \'BILLING\' | translate }}\n          </ion-segment-button>\n          <ion-segment-button value="shipping">\n            {{ \'SHIPPING\' | translate }}\n          </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="order">\n    <div *ngSwitchCase="\'detail\'">\n      <ion-list>\n        <ion-list-header no-margin no-lines>\n          {{ \'PRODUCTS\' | translate }}\n        </ion-list-header>\n        <ion-item *ngFor="let x of data.line_items">\n          <ion-thumbnail item-start>\n            <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.img +\')\'}"></div>\n          </ion-thumbnail>\n          <h3 [innerHTML]="x.name"></h3>\n          <p><span class="price">{{x.price | currency:\'USD\':true:\'1.2-2\'}}</span> • {{x.quantity}}x</p>\n        </ion-item>\n        <ion-list-header no-margin margin-top no-lines>\n          {{ \'PAYMENT\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.payment_method_title}}\n        </ion-item>\n        <ion-list-header no-margin no-lines *ngIf="data.shipping_lines[0]">\n          {{ \'SHIPPING\' | translate }}\n        </ion-list-header>\n        <ion-item *ngIf="data.shipping_lines[0]">\n          {{data.shipping_lines[0].method_title}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          <b>Total</b>\n        </ion-list-header>\n        <ion-item *ngIf="data.shipping_lines[0]">\n          {{ \'SHIPPING\' | translate }} ({{data.shipping_lines[0].method_title}}) <span item-end>{{data.shipping_lines[0].total | money}}</span>\n        </ion-item>\n        <ion-item *ngIf="data.coupon_lines[0]">\n          {{ \'COUPON\' | translate }} <span item-end>{{data.coupon_lines[0].discount}}</span>\n        </ion-item>\n        <ion-item>\n          Total <span item-end>{{data.total | money}}</span>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase="\'billing\'">\n      <ion-list>\n        <ion-list-header no-margin no-lines>\n          {{ \'NAME\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.billing.first_name}} {{data.billing.last_name}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'PHONE\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.billing.phone}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          Email\n        </ion-list-header>\n        <ion-item>\n          {{data.billing.email}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'CITY\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.billing.city}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'STATE\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.billing.state}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'COUNTRY\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.billing.country}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'ADDRESS\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.billing.address_1}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'POSTCODE\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.billing.postcode}}\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase="\'shipping\'">\n      <ion-list>\n        <ion-list-header no-margin no-lines>\n          {{ \'NAME\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.shipping.first_name}} {{data.shipping.last_name}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'CITY\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.shipping.city}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'STATE\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.shipping.state}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'COUNTRY\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.shipping.country}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'ADDRESS\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.shipping.address_1}}\n        </ion-item>\n        <ion-list-header no-margin no-lines>\n          {{ \'POSTCODE\' | translate }}\n        </ion-list-header>\n        <ion-item>\n          {{data.shipping.postcode}}\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\orders\detail\detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
], OrderDetailPage);

//# sourceMappingURL=detail.js.map

/***/ })

});
//# sourceMappingURL=9.js.map