webpackJsonp([6],{

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniCartPageModule", function() { return MiniCartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mini_cart__ = __webpack_require__(994);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MiniCartPageModule = (function () {
    function MiniCartPageModule() {
    }
    return MiniCartPageModule;
}());
MiniCartPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__mini_cart__["a" /* MiniCartPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__mini_cart__["a" /* MiniCartPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__mini_cart__["a" /* MiniCartPage */]
        ]
    })
], MiniCartPageModule);

//# sourceMappingURL=mini-cart.module.js.map

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MiniCartPage = (function () {
    function MiniCartPage(translate, modal, alert, user, cart, appCtrl, loader, viewCtrl, navCtrl, navParams) {
        this.translate = translate;
        this.modal = modal;
        this.alert = alert;
        this.user = user;
        this.cart = cart;
        this.appCtrl = appCtrl;
        this.loader = loader;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.total = 0;
        this.isCheckout = false;
        this.isCheckout = this.navParams.data.isCheckout;
        var product = this.navParams.data.product;
        if (this.navParams.data.product)
            this.cart.post(product, 1);
    }
    MiniCartPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MiniCartPage.prototype.goCheckout = function () {
        var _this = this;
        if (this.user.all) {
            this.dismiss();
            this.appCtrl.getRootNav().push('CheckoutPage');
        }
        else {
            this.translate.get(['CHECKOUT_GUEST', 'CHECKOUT_GUEST_MSG', 'NO', 'YES']).subscribe(function (x) {
                _this.alert.create({
                    title: x.CHECKOUT_GUEST,
                    message: x.CHECKOUT_GUEST_MSG,
                    buttons: [{
                            text: x.NO,
                            handler: function () {
                                _this.dismiss();
                                _this.appCtrl.getRootNav().push('CheckoutPage');
                            }
                        }, {
                            text: x.YES,
                            handler: function () {
                                _this.dismiss();
                                _this.modal.create('LoginPage').present();
                            }
                        }]
                }).present();
            });
        }
    };
    return MiniCartPage;
}());
MiniCartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mini-cart',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\product\mini-cart\mini-cart.html"*/'<ion-header>\n    <ion-navbar color="light" no-padding no-margin>\n      <ion-list-header>\n        {{\'CART\' | translate}}\n        <!-- <ion-icon small (click)="dismiss()" name="close" item-end></ion-icon> -->\n        <button item-end no-margin margin-vertical clear ion-button small color="primary" (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n      </ion-list-header>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list no-padding>\n      <ion-grid class="empty" *ngIf="cart.total == 0">\n        <ion-row align-items-center>\n          <ion-col align-self-center text-center>\n            <ion-icon name="basket" color="secondary"></ion-icon>\n            <h4 margin-bottom>{{ \'EMPTY\' | translate}}</h4>\n            <button color="secondary" ion-button outline tappable (click)="dismiss()">{{ \'START_SHOPPING\' | translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-item *ngFor="let x of cart.all" class="product-item" no-padding>\n          <ion-thumbnail item-start>\n            <img [src]="x.images[0].src">\n          </ion-thumbnail>\n          <h5 [innerHTML]="x.name"></h5>\n          <p>\n            <span class="disc" *ngIf="x.on_sale">{{x.regular_price | money}}</span> \n            <span class="price">{{x.price | money}}</span>\n            <ng-container *ngIf="x.attributes.length > 0"><span *ngFor="let y of x.attributes">• <i>{{y.option || y.options[0]}}</i>&nbsp;</span> </ng-container>\n            <span>• {{x.quantity}}x</span>\n          </p>\n      </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer no-padding padding-bottom *ngIf="cart.total > 0">\n  <ion-list no-padding no-margin>\n    <ion-item no-padding>\n      <h5><b>Total</b></h5>\n      <ion-badge item-end color="secondary">{{cart.total | money}}</ion-badge>\n    </ion-item>\n  </ion-list>\n  <button *ngIf="!isCheckout" ion-button block small (click)="goCheckout()">{{\'CHECKOUT\' | translate}}</button>\n  <ion-list no-margin>\n    <button color="secondary" ion-button small block (click)="dismiss()">{{\'CONTINUE\' | translate}}</button>\n  </ion-list>\n  </ion-footer>\n  '/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\product\mini-cart\mini-cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
], MiniCartPage);

//# sourceMappingURL=mini-cart.js.map

/***/ })

});
//# sourceMappingURL=6.js.map