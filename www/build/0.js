webpackJsonp([0],{

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wishlist__ = __webpack_require__(999);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WishlistPageModule = (function () {
    function WishlistPageModule() {
    }
    return WishlistPageModule;
}());
WishlistPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__wishlist__["a" /* WishlistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__wishlist__["a" /* WishlistPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
        ],
    })
], WishlistPageModule);

//# sourceMappingURL=wishlist.module.js.map

/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
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




var WishlistPage = (function () {
    function WishlistPage(wishlist, translate, cart, toast, alertCtrl, navCtrl) {
        this.wishlist = wishlist;
        this.translate = translate;
        this.cart = cart;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.products = [];
    }
    WishlistPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.wishlist.load().then(function () {
            _this.products = _this.wishlist.all;
        });
    };
    WishlistPage.prototype.removeFromWish = function (product) {
        var _this = this;
        this.translate.get(['REMOVE_TTL', 'REMOVE_MSG', 'CANCEL', 'YES']).subscribe(function (x) {
            var confirm = _this.alertCtrl.create({
                title: x.REMOVE_TTL,
                message: x.REMOVE_MSG,
                buttons: [{
                        text: x.CANCEL
                    }, {
                        text: x.YES,
                        handler: function () {
                            _this.confirmRemove(product);
                        }
                    }]
            });
            confirm.present();
        });
    };
    WishlistPage.prototype.reloadWish = function (product) {
        product.isFav = true;
        this.wishlist.post(product);
        this.products = this.wishlist.all;
    };
    WishlistPage.prototype.addToCart = function (product) {
        var _this = this;
        this.cart.post(product, 1);
        this.reloadWish(product);
        this.translate.get('ADDED_TO_CART').subscribe(function (x) {
            _this.toast.show(x);
        });
    };
    WishlistPage.prototype.confirmRemove = function (product) {
        var _this = this;
        this.reloadWish(product);
        this.translate.get('REMOVE_FROM_WISH').subscribe(function (x) {
            _this.toast.show(x);
        });
    };
    WishlistPage.prototype.goHome = function () {
        this.navCtrl.parent.select(0);
    };
    WishlistPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    return WishlistPage;
}());
WishlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wishlist',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\wishlist\wishlist.html"*/'<ion-content padding-top>\n	<div class="subtitle" *ngIf="products.length > 0">\n		<h1 margin-top margin-horizontal>{{ \'WISHLIST\' | translate}}</h1>		\n		<p no-margin margin-horizontal>{{ \'WISH_DESC\' | translate: {value: products.length} }}</p>\n	</div>\n	<ion-grid class="empty" *ngIf="products.length == 0">\n		<ion-row align-items-center>\n			<ion-col align-self-center text-center>\n				<ion-icon name="heart-outline" color="secondary"></ion-icon>\n				<h4 margin-bottom>{{ \'EMPTY\' | translate}}</h4>\n				<button color="secondary" ion-button outline tappable (click)="goHome()">{{ \'START_SHOPPING\' | translate}}</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-row padding-left padding-right class="product-grid">\n		<ion-col col-6 class="product-item" *ngFor="let x of products">\n			<div tappable (click)="goTo(\'ProductPage\', x)">\n				<div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.images[0].src +\')\'}">\n					<ion-badge *ngIf="x.on_sale">{{x | discount}}</ion-badge>\n				</div>\n				<h5 [innerHTML]="x.name"></h5>\n				<div class="price">\n					<span class="disc" *ngIf="x.on_sale">{{x.regular_price | money}}</span> \n					{{x.price | money}}\n				</div>\n				<ion-row no-padding class="reviews" *ngIf="x.rating_count">\n					<ion-col col-auto no-padding>\n						<ion-rating item-start *ngIf="x.average_rating"\n							[numStars]="5"\n							[readOnly]="true"\n							[value]="x.average_rating">\n						</ion-rating>\n						<span *ngIf="x.rating_count">{{x.rating_count}}</span>\n					</ion-col>\n				</ion-row>\n			</div>\n			<ion-row class="remove">\n				<ion-col col-9><button tappable (click)="addToCart(x)" ion-button small block outline>{{ \'TO_CART\' | translate}}</button></ion-col>\n				<ion-col col-3 text-center><button tappable (click)="removeFromWish(x)" no-padding ion-button icon-only clear><ion-icon no-padding name="trash"></ion-icon></button></ion-col>\n			</ion-row>\n		</ion-col>\n	</ion-row>\n	\n</ion-content>\n		'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\wishlist\wishlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
], WishlistPage);

//# sourceMappingURL=wishlist.js.map

/***/ })

});
//# sourceMappingURL=0.js.map