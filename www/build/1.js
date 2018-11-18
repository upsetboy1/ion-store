webpackJsonp([1],{

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPageModule", function() { return ThanksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thanks__ = __webpack_require__(998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThanksPageModule = (function () {
    function ThanksPageModule() {
    }
    return ThanksPageModule;
}());
ThanksPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__thanks__["a" /* ThanksPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thanks__["a" /* ThanksPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], ThanksPageModule);

//# sourceMappingURL=thanks.module.js.map

/***/ }),

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksPage; });
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


var ThanksPage = (function () {
    function ThanksPage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
        this.data = this.navParams.data.params;
    }
    ThanksPage.prototype.goHome = function () {
        this.nav.popToRoot();
        this.nav.parent.select(0);
    };
    return ThanksPage;
}());
ThanksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-thanks',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\thanks\thanks.html"*/'<ion-content padding fullscreen text-center style="padding: 15% 0;">\n    <h1>{{\'THANKS\' | translate}}</h1>\n    <h6>{{\'FOR_THE_ORDER\' | translate}}</h6>\n    <p>{{\'YOUR_ID\' | translate}}: #{{data.id}}</p>\n    <div padding-vertical>\n        <img class="img" src="assets/img/miscellaneous/truck.jpg">\n        <!-- <ion-icon name="fa-truck"></ion-icon> -->\n    </div>\n    <p>{{\'PROCESS_ORDER\' | translate}}</p>\n    <button margin-top ion-button block tappable (click)="goHome()">{{\'CONTINUE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\thanks\thanks.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
], ThanksPage);

//# sourceMappingURL=thanks.js.map

/***/ })

});
//# sourceMappingURL=1.js.map