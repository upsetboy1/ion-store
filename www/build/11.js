webpackJsonp([11],{

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_global__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(nav, statusBar, translate, toast, wishlist, loader, modalCtrl, woo) {
        var _this = this;
        this.nav = nav;
        this.translate = translate;
        this.toast = toast;
        this.wishlist = wishlist;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.woo = woo;
        this.categories = new Array;
        this.data = new Array();
        this.loader.present();
        this.App = __WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */];
        this.woo.getAllCategories().then(function (tmp) {
            _this.categories = tmp;
            _this.woo.loadSetting().then(function (x) {
                if (x.currency) {
                    _this.app = x;
                    for (var i in tmp) {
                        if (tmp[i].count > 4 && tmp[i].parent != 0) {
                            _this.woo.getAllProducts(null, tmp[i].id, null, null, null, 9, null, null).then(function (val) {
                                _this.data.push(val);
                            });
                        }
                    }
                    _this.loader.dismiss();
                }
            });
        });
    }
    HomePage.prototype.setFav = function (product) {
        var _this = this;
        this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe(function (x) {
            var msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
            _this.wishlist.post(product);
            product.isFav = product.isFav ? false : true;
            _this.toast.show(msg);
        });
    };
    HomePage.prototype.showSearch = function () {
        this.modalCtrl.create('SearchPage').present();
    };
    HomePage.prototype.goTo = function (page, params) {
        this.nav.push(page, { params: params });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\home\home.html"*/'<ion-header>  \n    <ion-navbar>\n        <div class="newsearch">\n          <div no-padding class="searchbar searchbar-md">\n            <div class="searchbar-input-container">\n              <button ion-button icon-left clear icon-only (click)="showSearch()"><ion-icon name="search" mode="ios"></ion-icon></button>\n              <!-- <input (click)="showSearch()" class="searchbar-input" placeholder="{{ \'SEARCH\' | translate }}" value="{{App.store}}" type="search" autocomplete="off" autocorrect="off" spellcheck="false"> -->\n              <div class="searchbar-input" (click)="showSearch()">\n                  {{App.store}}\n              </div>\n            </div>\n          </div>\n        </div>\n    </ion-navbar>\n</ion-header>\n\n <ion-content no-padding>\n\n      <ion-slides loop="true" autoplay="2000" pager>\n        <ion-slide *ngFor="let number of [1,2,3,4]">\n          <img src="assets/img/slides/slide{{number}}.jpg" />\n        </ion-slide>\n      </ion-slides>\n\n      <div class="">\n        <ion-list no-lines no-margin margin-left>\n          <ion-item no-padding no-lines>\n            {{ \'CATEGORIES\' | translate }}\n            <button item-end ion-button clear icon-end tappable (click)="goTo(\'CategoriesPage\')">\n                {{ \'SEE_ALL\' | translate }}\n                <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n          </ion-item>\n        </ion-list>\n\n        <ion-scroll scrollX="true" class="item category-slide">\n          <ion-row nowrap padding-left>\n            <ng-container *ngFor="let x of categories; let i=index">\n              <ion-col col-auto no-padding *ngIf="categories[i*2] || categories[i*2+1]">\n                <div *ngIf="categories[i*2]" class="img" [ngStyle]="{\'background-image\': \'url(\' + categories[i*2].image.src +\')\'}" tappable (click)="goTo(\'ProductGridPage\', categories[i*2])">\n                  <div class="fade"></div>\n                  <h5>{{categories[i*2].name}}</h5>\n                </div>\n                <div *ngIf="categories[i*2+1]" class="img" [ngStyle]="{\'background-image\': \'url(\' + categories[i*2+1].image.src +\')\'}" tappable (click)="goTo(\'ProductGridPage\', categories[i*2+1])">\n                  <div class="fade"></div>\n                  <h5>{{categories[i*2+1].name}}</h5>\n                </div>\n              </ion-col>\n            </ng-container>\n          </ion-row>\n        </ion-scroll>\n\n          <!-- <ion-row padding-left padding-right class="categories-grid">\n            <ion-col col-4 class="category-item" *ngFor="let x of tmp">\n              <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.image.src +\')\'}" tappable (click)="goTo(\'ProductGridPage\', x)">\n                <div class="fade"></div>\n                <h5>{{x.name}}</h5>\n              </div>\n            </ion-col>\n          </ion-row> -->\n      </div> \n\n      <div class="product-slide" *ngFor="let x of data">\n        <ion-list no-lines no-margin margin-left>\n          <ion-item no-padding>\n            {{x[0].categories[0].name}}\n            <button item-end ion-button clear icon-end tappable (click)="goTo(\'ProductGridPage\', x[0].categories[0])">\n              {{ \'SEE_ALL\' | translate }}\n                <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n          </ion-item>\n        </ion-list>\n\n        <ion-slides margin-bottom spaceBetween="10" slidesPerView="2.5">\n          <ion-slide *ngFor="let y of x">\n            <button class="fav" tappable (click)="setFav(y)" ion-button clear icon-only>\n              <ion-icon *ngIf="y.variations.length == 0" no-padding name="heart{{!wishlist.isFav(y) ? \'-outline\' : \'\'}}"></ion-icon>\n            </button>\n            <div text-left class="product-item" tappable (click)="goTo(\'ProductPage\', y)">\n              <div class="img" [ngStyle]="{\'background-image\': \'url(\' + y.images[0].src +\')\'}">\n                <ion-badge *ngIf="y.on_sale">{{y | discount}}</ion-badge>\n              </div>\n              <h5 [innerHTML]="y.name"></h5>\n              <div class="price">\n                  <span class="disc" *ngIf="y.on_sale">{{y.regular_price | money:app}}</span> \n                  {{y.price | money:app}}\n              </div>\n              <ion-row no-padding class="reviews" *ngIf="y.rating_count">\n                <ion-col col-auto no-padding>\n                  <ion-rating *ngIf="y.average_rating" item-start\n                    [numStars]="5"\n                    [readOnly]="true"\n                    [value]="y.average_rating">\n                  </ion-rating>\n                  <span *ngIf="y.rating_count">{{y.rating_count}}</span>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-slide>\n        </ion-slides>\n        <!-- <ion-row padding-left padding-right class="product-grid">\n          <ion-col col-6 class="product-item" *ngFor="let x of products" tappable (click)="goTo(\'ProductPage\', x)">\n            <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.img +\')\'}">\n              <ion-icon class="fav" name="heart{{!x.isFav ? \'-outline\' : \'\'}}"></ion-icon>\n              <ion-badge *ngIf="x.disc">{{x.disc}}% OFF</ion-badge>\n            </div>\n            <h5>{{x.title}}</h5>\n            <div class="price">\n                <span class="disc" *ngIf="x.on_sale">{{x.regular_price | currency:\'USD\':true:\'1.2-2\'}}</span> \n                {{x.price | currency:\'USD\':true:\'1.2-2\'}}\n            </div>\n            <ion-row no-padding class="reviews">\n              <ion-col col-6 no-padding>\n                <ion-rating item-start\n                  [numStars]="5"\n                  [readOnly]="true"\n                  [value]="x.rating">\n                </ion-rating>\n              </ion-col>\n              <ion-col no-padding text-center *ngIf="x.reviews">{{x.reviews}} Reviews</ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row> -->\n      </div>\n\n</ion-content>'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["h" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["j" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["k" /* WooCommerceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=11.js.map