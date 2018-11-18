webpackJsonp([3],{

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(996);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
        ],
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchPage = (function () {
    function SearchPage(translate, keyboard, fb, history, toast, loader, appCtrl, alertCtrl, viewCtrl, navCtrl, woo) {
        var _this = this;
        this.translate = translate;
        this.history = history;
        this.toast = toast;
        this.loader = loader;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.woo = woo;
        this.categories = [];
        this.loader.present();
        this.search = fb.group({
            search: ''
        });
        this.woo.getSubCategories().then(function (val) {
            _this.categories = val;
            _this.loader.dismiss();
            keyboard.hasFocusedTextInput();
        });
    }
    SearchPage.prototype.submit = function () {
        this.goTo('ProductGridPage', this.search.value);
    };
    SearchPage.prototype.toggleSection = function (i) {
        this.categories[i].open = !this.categories[i].open;
    };
    SearchPage.prototype.toggleItem = function (i, j) {
        this.categories[i].children[j].open = !this.categories[i].children[j].open;
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        this.loadHistory();
    };
    SearchPage.prototype.loadHistory = function () {
        this.history.load().then(function () { });
    };
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.reset = function (e) {
        this.search.reset();
    };
    SearchPage.prototype.confirmRemove = function () {
        var _this = this;
        this.history.clear;
        this.translate.get(['HISTORY_CLEAR']).subscribe(function (x) {
            _this.toast.show(x.HISTORY_CLEAR);
        });
    };
    SearchPage.prototype.resetHistory = function (product) {
        var _this = this;
        this.translate.get(['HISTORY_TITLE', 'HISTORY_DESC', 'CANCEL', 'YES']).subscribe(function (x) {
            _this.alertCtrl.create({
                title: x.HISTORY_TITLE,
                message: x.HISTORY_DESC,
                buttons: [{
                        text: x.CANCEL
                    }, {
                        text: x.YES,
                        handler: function () {
                            _this.confirmRemove();
                        }
                    }]
            }).present();
        });
    };
    SearchPage.prototype.goTo = function (page, params) {
        this.dismiss();
        this.appCtrl.getRootNav().push(page, { params: params });
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\search\search.html"*/'<ion-header>\n  <ion-navbar >\n			<div class="newsearch">\n				<div no-padding class="searchbar searchbar-md">\n					<div class="searchbar-input-container">\n						<button ion-button icon-left icon-only clear tappable (click)="dismiss()"><ion-icon name="arrow-back"></ion-icon></button>\n						<form [formGroup]="search" (ngSubmit)="submit()" novalidate>      \n							<ion-input formControlName="search" class="searchbar-input" placeholder="{{ \'SEARCH\' | translate }}" type="search"></ion-input>\n							<button type="reset" *ngIf="(search.controls[\'search\'].value)" tappable (click)="reset(currForm)" ion-button icon-right icon-only clear><ion-icon name="close"></ion-icon></button>\n						</form>\n					</div>\n				</div>\n			</div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<!-- <ion-list no-lines>\n	  <ion-list-header no-margin>\n	    Search History\n		<button item-end ion-button clear icon-start>\n			<ion-icon name="trash"></ion-icon>\n			CLEAR\n		</button>\n	  </ion-list-header>\n	  <ion-item><h5>White x Black</h5></ion-item>\n	  <ion-item><h5>New Look Faux</h5></ion-item>\n	  <ion-item><h5>Maiami Lather Bag</h5></ion-item>\n	</ion-list> -->\n	<ion-list no-lines>\n			<ion-list-header no-margin>\n				{{ \'CATEGORIES\' | translate }}\n			</ion-list-header>\n			<ion-list no-padding class="accordion-list">\n					<div *ngFor="let item of categories; let i = index">\n						<ion-item tappable (click)="toggleSection(i)" [ngClass]="{\'active\':item.open, \'section\': item.open}">\n								<h2>{{ item.name }}</h2>\n								<ion-icon name="add" item-end></ion-icon>\n						</ion-item>\n						<ion-list [class.active]="item.open" class="sub-accordion" no-margin no-padding padding-left no-lines *ngIf="item.child && item.open">\n								<button ion-item no-lines *ngFor="let child of item.child; let j = index" tappable (click)="goTo(\'ProductGridPage\', child)"> \n									<h3>{{child.name}}</h3>\n									<ion-badge item-end color="secondary">{{child.count}}</ion-badge>\n								</button>\n						</ion-list>\n					</div>\n			</ion-list>\n	</ion-list>\n	<ion-list no-lines *ngIf="history.all.length > 0">\n	  <ion-list-header no-margin>\n	    {{ \'HISTORY\' | translate }}\n	    <button item-end ion-button clear icon-start tappable (click)="resetHistory()">\n				<ion-icon name="trash"></ion-icon>\n				{{ \'CLEAR\' | translate }}\n			</button>\n		</ion-list-header>\n		<ion-item *ngFor="let x of history.all" tappable (click)="goTo(\'ProductPage\', x)">\n			<ion-thumbnail item-start>\n				<div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.images[0].src +\')\'}"></div>\n			</ion-thumbnail>\n			<h3>{{x.name}}</h3>\n			<p><span class="price">{{x.price | money}}</span></p>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* HistoryProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* WooCommerceProvider */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=3.js.map