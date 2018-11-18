webpackJsonp([2],{

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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



var TabsPage = (function () {
    function TabsPage(user, wish, cart, modal, navParams) {
        this.user = user;
        this.wish = wish;
        this.cart = cart;
        this.modal = modal;
        this.navParams = navParams;
        this.tab1Root = 'HomePage';
        this.tab2Root = 'CartPage';
        this.tab3Root = 'WishlistPage';
        this.tab4Root = 'OrdersPage';
        this.tab5Root = 'AccountPage';
        this.mySelectedIndex = 0;
        this.mySelectedIndex = this.navParams.data.tabIndex || this.mySelectedIndex;
    }
    TabsPage.prototype.isLogin = function (page, id) {
        var _this = this;
        this.user.load().then(function (x) {
            if (x) {
                console.log(x);
                _this.user.isLoggedIn().map(function (x) { return x.json(); }).subscribe(function (x) {
                    if (!x.valid) {
                        _this.modal.create('LoginPage', { tabIndex: id }).present();
                        _this.mySelectedIndex = id;
                    }
                });
            }
            else {
                _this.modal.create('LoginPage', { tabIndex: id }).present();
                _this.mySelectedIndex = id;
            }
        });
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex">\n  <ion-tab [root]="tab1Root" tabTitle="{{ \'HOME\' | translate }}" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="{{ \'WISHLIST\' | translate }}" tabIcon="heart" [tabBadge]="wish.total"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="{{ \'CART\' | translate }}" tabIcon="basket" [tabBadge]="cart.totalQty"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="{{ \'ORDERS\' | translate }}" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="{{ \'ACCOUNT\' | translate }}" tabIcon="contact"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=2.js.map