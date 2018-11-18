webpackJsonp([12],{

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout__ = __webpack_require__(987);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutPageModule = (function () {
    function CheckoutPageModule() {
    }
    return CheckoutPageModule;
}());
CheckoutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__checkout__["a" /* CheckoutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__checkout__["a" /* CheckoutPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
        ],
    })
], CheckoutPageModule);

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
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




var CheckoutPage = (function () {
    function CheckoutPage(setting, alert, platform, nav, translate, toast, user, loader, woo, _cart, events, _order, address, navParams, modal) {
        var _this = this;
        this.setting = setting;
        this.alert = alert;
        this.platform = platform;
        this.nav = nav;
        this.translate = translate;
        this.toast = toast;
        this.user = user;
        this.loader = loader;
        this.woo = woo;
        this._cart = _cart;
        this.events = events;
        this._order = _order;
        this.address = address;
        this.navParams = navParams;
        this.modal = modal;
        this.checkout = "shipping";
        this.shipping_lines = [];
        this.shipping_method = [];
        this.payments = [];
        this.order = {};
        this.stripe = {
            no: '',
            month: '',
            year: ''
        };
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.years = [];
        this.img = {
            stripe: [
                'assets/img/logo/visa.svg',
                'assets/img/logo/mastercard.svg',
                'assets/img/logo/amex.svg',
                'assets/img/logo/diners.svg',
                'assets/img/logo/discover.svg',
                'assets/img/logo/jcb.svg'
            ],
            paypal: [
                'assets/img/logo/visa.svg',
                'assets/img/logo/mastercard.svg',
                'assets/img/logo/amex.svg',
                'assets/img/logo/discover.svg'
            ]
        };
        this.woo.loadPayments().then(function (x) {
            _this.payments = x;
        });
        this.cart = this._cart;
        if (this.setting.all.zones.length <= 0) {
            this.loader.present();
            this.woo.loadZones();
            this.setting.load().then(function (x) {
                _this.zones = x.zones;
                _this.loader.dismiss();
            });
        }
        else
            this.zones = this.setting.all.zones;
        // this.woo.getTaxes().then( x=> {
        //   this.tax = x;
        //   console.log(x);
        // })
        this.listenOrder();
    }
    CheckoutPage.prototype.ionViewDidEnter = function () {
        this.setOrder();
    };
    CheckoutPage.prototype.setOrder = function () {
        var _this = this;
        if (this.address.getPrimary) {
            this.billing = this.address.getPrimary;
            this.shipping = this.address.getPrimary;
        }
        if (this._order.billing)
            this.billing = this._order.billing;
        if (this._order.shipping)
            this.shipping = this._order.shipping;
        //let tmp = (this.settings.value == 'shipping') ? this.shipping : this.billing;
        if (this.shipping) {
            var id = this.woo.getSingleZone(this.setting.all.zones, this.shipping);
            if (id) {
                this.loader.present();
                this.woo.getShippingZoneMethod(id).then(function (x) {
                    _this.shipping_method = x;
                    _this.loader.dismiss();
                }, function (e) {
                    console.log(e);
                });
            }
            else {
                this.shipping_method = [];
                this.translate.get(['NO_SHIPPING']).subscribe(function (x) {
                    _this.toast.showWithClose(x.NO_SHIPPING);
                });
            }
        }
        else {
            this.translate.get(['SELECT_SHIPPING']).subscribe(function (x) {
                _this.toast.showWithClose(x.SELECT_SHIPPING);
            });
        }
    };
    CheckoutPage.prototype.viewCart = function () {
        this.modal.create('MiniCartPage', { isCheckout: true }, { cssClass: 'inset-modal' }).present();
    };
    CheckoutPage.prototype.setShipping = function (param) {
        this.shipping_lines = [];
        var e = JSON.parse(param);
        this.shipping_lines.push({
            method_id: e.method_id,
            method_title: e.title,
            total: (e.settings.cost ? e.settings.cost.value : 0)
        });
        this.total = this.cart.total + parseInt(this.shipping_lines[0].total);
    };
    CheckoutPage.prototype.setPayment = function (param) {
        this.years = [];
        var e = JSON.parse(param);
        this.order.payment_method = e.id;
        this.order.payment_method_title = e.method_title;
        this.order.payment_method_description = e.description;
        if (e.id == 'paypal' || e.id == 'stripe')
            this.order.set_paid = true;
        for (var i in this.payments)
            this.payments[i].open = false;
        this.payments[e.order].open = true || !this.payments[e.order].open;
        if (e.id == 'stripe') {
            if (e.settings.testmode.value == 'yes') {
                this.stripe.publishable_key = e.settings.test_publishable_key.value;
                this.stripe.secret_key = e.settings.test_secret_key.value;
            }
            else {
                this.stripe.publishable_key = e.settings.publishable_key.value;
                this.stripe.secret_key = e.settings.secret_key.value;
            }
            for (var i = 0; i < 10; i++)
                this.years.push(new Date().getFullYear() + i);
        }
    };
    CheckoutPage.prototype.listenOrder = function () {
        var _this = this;
        this.events.subscribe('order:go', function (res) {
            _this.setOrder();
        });
    };
    CheckoutPage.prototype.selectAddress = function (action) {
        var params = {
            action: action
        };
        this.modal.create('SavedAddressPage', { params: params }).present();
    };
    CheckoutPage.prototype.addAddress = function (action) {
        var params = {
            action: action
        };
        this.modal.create('AddAddressPage', { params: params }).present();
    };
    CheckoutPage.prototype.next = function () {
        this.checkout = 'payment';
    };
    CheckoutPage.prototype.confirm = function () {
        var _this = this;
        this.loader.present();
        this.order.billing = this.billing;
        this.order.shipping = this.shipping;
        this.order.line_items = this.cart.lineItems;
        this.order.shipping_lines = this.shipping_lines;
        if (this.user.all)
            this.order.customer_id = this.user.id;
        // console.log(this.stripe);
        // console.log(this.order);
        //this.loader.dismiss();
        // CHECKOUT WITH PAYPAL
        if (this.order.payment_method == 'paypal') {
            if (!this.platform.is('cordova')) {
                this.translate.get(['OK', 'ONLY_DEVICE', 'ONLY_DEVICE_DESC']).subscribe(function (x) {
                    _this.alert.create({
                        title: x.ONLY_DEVICE,
                        message: x.ONLY_DEVICE_DESC,
                        buttons: [{
                                text: x.OK
                            }]
                    }).present();
                    _this.loader.dismiss();
                    return false;
                });
            }
            else {
                var opt = {
                    total: this.total,
                    currency: this.setting.all.settings.currency,
                    desc: this.order.payment_method_description,
                    detail: {
                        subtotal: this.cart.total,
                        shipping: parseInt(this.shipping_lines[0].total)
                    }
                };
                this._order.checkoutPaypal(this.order, opt).then(function (res) {
                    if (res) {
                        _this.createOrder(_this.order);
                    }
                    else {
                        _this.loader.dismiss();
                        _this.toast.show(res);
                    }
                }, function (err) {
                    _this.loader.dismiss();
                    _this.toast.show(err);
                });
            }
            // CHECKOUT WITH STRIPE
        }
        else if (this.order.payment_method == 'stripe') {
            if (!this.platform.is('cordova')) {
                this.translate.get(['OK', 'ONLY_DEVICE', 'ONLY_DEVICE_DESC']).subscribe(function (x) {
                    _this.alert.create({
                        title: x.ONLY_DEVICE,
                        message: x.ONLY_DEVICE_DESC,
                        buttons: [{
                                text: x.OK
                            }]
                    }).present();
                    _this.loader.dismiss();
                    return false;
                });
            }
            else {
                this.stripe.total = this.total * 100;
                this.stripe.carrier = this.order.shipping_lines[0].method_title;
                this.stripe.shipping = this.order.shipping;
                if (this.user.all)
                    this.stripe.customer_id = this.user.id;
                this.stripe.billing = this.order.billing;
                this.stripe.device = this.platform.platforms();
                this.stripe.currency = this.setting.all.settings.currency;
                this._order.getToken(this.stripe).then(function (token) {
                    if (token.id) {
                        _this._order.stripeCharge(_this.stripe, token)
                            .subscribe(function (res) {
                            console.log(res);
                            _this.createOrder(_this.order);
                        }, function (err) {
                            _this.loader.dismiss();
                            _this.toast.showWithClose(err.json().error.message);
                        });
                    }
                    else {
                        console.log(token);
                        _this.loader.dismiss();
                        _this.toast.showWithClose(token);
                    }
                }, function (err) {
                    console.log(err);
                    _this.loader.dismiss();
                    _this.toast.showWithClose(err);
                });
            }
        }
        else
            // OTHERWISE PAYPAL OR STRIPE
            this.createOrder(this.order);
    };
    CheckoutPage.prototype.createOrder = function (order) {
        var _this = this;
        this.woo.createOrder(order).then(function (x) {
            if (x) {
                _this._order.reset().then(function () { });
                _this.cart.reset().then(function () { });
                _this.goTo('ThanksPage', x);
            }
            else {
                _this.toast.showWithClose('Error 401');
            }
            _this.loader.dismiss();
        }, function (err) {
            _this.loader.dismiss();
            _this.toast.show(err);
        });
    };
    CheckoutPage.prototype.goTo = function (page, params) {
        this.nav.push(page, { params: params });
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\checkout\checkout.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n        <ion-segment [(ngModel)]="checkout" padding-left padding-right>\n          <ion-segment-button value="shipping">\n            {{ \'SHIPPING\' | translate}}\n          </ion-segment-button>\n          <ion-segment-button value="payment" [disabled]="shipping_lines.length==0"> \n            {{ \'PAYMENT\' | translate}}\n          </ion-segment-button>\n        </ion-segment>\n        <ion-buttons end>\n          <button ion-button icon-only tappable (click)="viewCart()">\n            <ion-icon name="basket"></ion-icon>\n          </button>\n        </ion-buttons>\n   </ion-navbar>\n </ion-header>\n\n<ion-content padding-top>\n  <div [ngSwitch]="checkout">\n    <div *ngSwitchCase="\'shipping\'">\n      <ion-list margin-bottom>\n        <div padding-horizontal>\n          <h3>{{ \'BILLING_ADDRESS\' | translate}}</h3>\n          <ion-note padding-bottom>{{ \'BILLING_DESC\' | translate}}</ion-note>\n        </div>\n        <ion-item no-lines *ngIf="billing">\n            <p>{{billing.first_name}} • {{billing.phone}}</p>\n            <p>{{billing.address_1}}</p>\n            <p>{{billing.city}}, {{billing.state}}, {{billing.postcode}}</p>\n            <p>{{billing.country}}</p>\n        </ion-item>\n        <div padding-horizontal>\n          <button ion-button outline block icon-start *ngIf="!billing" tappable (click)="addAddress(3)">\n              {{ \'ADD\' | translate}} {{ \'NEW_ADDRESS\' | translate}}\n          </button>\n          <button ion-button outline block icon-start *ngIf="billing" tappable (click)="selectAddress(3)">\n              {{ \'SELECT\' | translate}} {{ \'OTHER_ADDRESS\' | translate}}\n          </button>\n        </div>\n      </ion-list>\n\n      <ion-list margin-top padding-top >\n        <div padding-horizontal>\n          <h3>{{ \'SHIPPING_ADDRESS\' | translate}}</h3>\n          <ion-note padding-bottom>{{ \'SHIPPING_DESC\' | translate}}</ion-note>\n        </div>\n        <ion-item no-lines *ngIf="shipping">\n            <p>{{shipping.first_name}} • {{shipping.phone}}</p>\n            <p>{{shipping.address_1}}</p>\n            <p>{{shipping.city}}, {{shipping.state}}, {{shipping.postcode}}</p>\n            <p>{{shipping.country}}</p>\n        </ion-item>\n        <div padding-horizontal>\n          <button ion-button outline block icon-start *ngIf="!shipping" tappable (click)="addAddress(4)">\n              {{ \'ADD\' | translate}} {{ \'NEW_ADDRESS\' | translate}}\n          </button>\n          <button ion-button outline block icon-start *ngIf="shipping" tappable (click)="selectAddress(4)">\n              {{ \'SELECT\' | translate}} {{ \'OTHER_ADDRESS\' | translate}}\n          </button>\n        </div>\n      </ion-list>\n\n      <ion-list no-margin margin-top padding-top>\n        <div padding-horizontal>\n          <h3>{{ \'SHIPPING_METHOD\' | translate}}</h3>\n          <ion-note>{{ \'SHIPPING_METHOD_DESC\' | translate}}</ion-note>\n        </div>\n      </ion-list>\n      <ion-list radio-group no-margin margin-vertical (ionChange)="setShipping($event)">\n        <ng-container *ngFor="let x of shipping_method">\n          <ion-item mode="ios" *ngIf="x.enabled">\n            <ion-label>{{x.title}} <span *ngIf="x.settings.cost">({{x.settings.cost.value | money}})</span></ion-label>\n            <ion-radio mode="ios" [value]="x | json"></ion-radio>\n          </ion-item>\n        </ng-container>\n      </ion-list>\n\n      <div padding>\n        <button ion-button block icon-start tappable (click)="next()" [disabled]="shipping_lines.length == 0">\n            {{ \'NEXT\' | translate}}\n        </button>\n      </div>\n    </div>\n\n    <div *ngSwitchCase="\'payment\'">\n      <ion-list margin-bottom>\n        <div padding-horizontal>\n          <h3>{{ \'PAYMENT_METHOD\' | translate}}</h3>\n          <ion-note>{{ \'PAYMENT_METHOD_DESC\' | translate}}</ion-note>\n        </div>\n      </ion-list>\n      <ion-list radio-group no-margin margin-top (ionChange)="setPayment($event)">\n        <ng-container *ngFor="let x of payments; let i = index">\n          <ion-item mode="ios" *ngIf="x.enabled" [ngClass]="{\'section-active\': x.open, \'section\': !x.open}">\n            <ion-label>\n              {{x.title}} \n              <img *ngFor="let x of img[x.id]" [src]="x" width="25" />\n            </ion-label>\n            <ion-radio mode="ios" [value]="x | json"></ion-radio>\n          </ion-item>\n          <ion-list class="accord" no-lines padding no-margin *ngIf="x.open && x.description" [ngClass]="{\'section-active\': x.open, \'section\': !x.open}">\n              <ion-item [innerHTML]="x.description" no-padding></ion-item>\n              <ion-grid class="stripe-form" *ngIf="x.id == \'stripe\'">\n                <ion-row>\n                  <ion-col>\n                    <ion-item no-padding>\n                        <ion-label floating>Card No</ion-label>\n                        <ion-input [(ngModel)]="stripe.no" [class.invalid]="!stripe.no" type="number" min="16" inputmode="numeric" pattern="[0-9]*"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item no-padding> \n                        <ion-label floating>Month</ion-label>\n                        <ion-select [(ngModel)]="stripe.month" [class.invalid]="!stripe.month">\n                            <ion-option *ngFor="let x of months; let i = index" [value]="i+1">{{x}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item no-padding>\n                        <ion-label floating>Year</ion-label>\n                        <ion-select [(ngModel)]="stripe.year" [class.invalid]="!stripe.year">\n                            <ion-option *ngFor="let x of years; let i = index" [value]="x">{{x}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item no-padding>\n                        <ion-label floating>CVC</ion-label>\n                        <ion-input [(ngModel)]="stripe.cvc" type="number" min="3" [class.invalid]="!stripe.cvc" type="number" min="3" inputmode="numeric" pattern="[0-9]*"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n          </ion-list>\n        </ng-container>\n      </ion-list>\n\n      <ion-list no-margin margin-top padding-top>\n        <div padding-horizontal>\n          <h3>{{ \'REVIEW_PURCHASE\' | translate}}</h3>\n          <ion-note>{{ \'REVIEW_DESC\' | translate}}</ion-note>\n        </div>\n      </ion-list>\n      <ion-list no-margin margin-top *ngIf="cart.all.length > 0">\n        <ion-item *ngFor="let x of cart.all">\n          <ion-thumbnail item-start>\n            <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.images[0].src +\')\'}"></div>\n          </ion-thumbnail>\n          <h3 [innerHTML]="x.name"></h3>\n          <p>\n            <span class="disc" *ngIf="x.on_sale">{{x.regular_price | money}} •</span> \n            <span class="price">{{x.price | money}}</span>\n            <ng-container *ngIf="x.attributes.length > 0"><span *ngFor="let y of x.attributes">• <i>{{y.option || y.options[0]}}</i>&nbsp;</span></ng-container>\n            <span>• {{x.quantity}}x</span>\n          </p>\n        </ion-item>\n      </ion-list>\n\n      <ion-list no-margin margin-top class="total">\n        <ion-item>\n          {{ \'SUBTOTAL\' | translate}} ({{cart.totalQtyDetail}} items)\n          <span item-end>{{cart.total | money}}</span>\n        </ion-item>\n        <ion-item *ngIf="shipping_lines[0]">\n          {{ \'SHIPPING\' | translate}} ({{shipping_lines[0].method_title}}) \n          <span item-end>{{shipping_lines[0].total | money}}</span>\n        </ion-item>\n        <ion-item>\n          Total <span item-end>{{total | money}}</span>\n        </ion-item>\n      </ion-list>\n\n      <div padding>\n        <button ion-button block icon-start tappable (click)="confirm()" [disabled]="!order.payment_method || ((order.payment_method == \'stripe\') && (!stripe.no || !stripe.month || !stripe.year || !stripe.cvc))">\n            {{ \'BUY_NOW\' | translate}} {{total | money}}\n        </button>\n      </div>\n    </div>\n\n  </div>\n\n  \n\n</ion-content>'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\checkout\checkout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=12.js.map