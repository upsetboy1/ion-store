webpackJsonp([7],{

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGridPageModule", function() { return ProductGridPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid__ = __webpack_require__(992);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductGridPageModule = (function () {
    function ProductGridPageModule() {
    }
    return ProductGridPageModule;
}());
ProductGridPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__grid__["a" /* ProductGridPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__grid__["a" /* ProductGridPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
        ],
    })
], ProductGridPageModule);

//# sourceMappingURL=grid.module.js.map

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGridPage; });
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





var ProductGridPage = (function () {
    function ProductGridPage(toast, alert, fb, translate, loader, navCtrl, modalCtrl, navParams, woo, wishlist, actionSheetCtrl) {
        var _this = this;
        this.toast = toast;
        this.alert = alert;
        this.translate = translate;
        this.loader = loader;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.woo = woo;
        this.wishlist = wishlist;
        this.actionSheetCtrl = actionSheetCtrl;
        this.param = {};
        this.products = [];
        this.attributes = [];
        this.page = 1;
        this.param.name = this.navParams.data.params.name;
        this.param.id = this.navParams.data.params.id;
        this.param.search = this.navParams.data.params.search;
        this.param.per_page = 10;
        this.search = fb.group({
            name: this.param.name || this.param.search
        });
        this.woo.getSubCategories().then(function (val) {
            _this.categories = val;
            _this.loadSubCategory(_this.param.id);
        });
        this.woo.getAttributes().then(function (tmp) {
            var _loop_1 = function (i) {
                _this.attributes[i] = tmp[i];
                _this.woo.getAttributeTerms(tmp[i].id).then(function (val) {
                    if (val) {
                        for (var j in val) {
                            val[j].checked = false;
                            _this.attributes[i].options = val;
                        }
                    }
                });
            };
            for (var i in tmp) {
                _loop_1(i);
            }
        });
        // this.param.min = this.min;
        // this.param.max = this.max;
        this.loadProducts(this.param);
    }
    ProductGridPage.prototype.loadSubCategory = function (id) {
        this.subcategory = [];
        for (var i in this.categories) {
            if (this.categories[i].id == id) {
                this.subcategory = this.categories[i].child;
                break;
            }
        }
    };
    ProductGridPage.prototype.loadProducts = function (x) {
        var _this = this;
        this.loader.present();
        this.woo.getAllProducts(1, x.id, x.search, null, null, x.per_page, null, x.order, x.attribute, x.attribute_term).then(function (val) {
            _this.products = val;
            if (_this.products.length == x.per_page)
                _this.more = true;
            _this.loader.dismiss();
        });
    };
    ProductGridPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.page++;
        this.woo.getAllProducts(this.page, this.param.id, this.param.search, null, null, this.param.per_page, null, this.param.order, this.param.attribute, this.param.attribute_term).then(function (val) {
            var temp = val;
            event.complete();
            _this.products = _this.products.concat(temp);
            if (temp.length < _this.param.per_page) {
                _this.more = false;
                event.enable(false);
                _this.translate.get(['NOMORE']).subscribe(function (x) {
                    _this.toast.show(x.NOMORE);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductGridPage.prototype.showSort = function () {
        var _this = this;
        this.translate.get(['SORT', 'NEWEST', 'OLDEST', 'CANCEL']).subscribe(function (x) {
            _this.actionSheetCtrl.create({
                title: x.SORT,
                buttons: [{
                        text: x.NEWEST,
                        handler: function () {
                            _this.param.order = 'desc';
                            _this.loadProducts(_this.param);
                        }
                    }, {
                        text: x.OLDEST,
                        handler: function () {
                            _this.param.order = 'asc';
                            _this.loadProducts(_this.param);
                        }
                    }, {
                        text: x.CANCEL,
                        role: 'cancel'
                    }
                ]
            }).present();
        });
    };
    ProductGridPage.prototype.setFav = function (product) {
        var _this = this;
        this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe(function (x) {
            var msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
            _this.wishlist.post(product);
            product.isFav = product.isFav ? false : true;
            _this.toast.show(msg);
        });
    };
    ProductGridPage.prototype.showFilter = function (attribute) {
        var _this = this;
        this.loader.present();
        var alert = this.alert.create();
        alert.setTitle(attribute.name);
        this.translate.get(['FILTER_DESC'], { value: attribute.name }).subscribe(function (x) {
            alert.setSubTitle(x.FILTER_DESC);
        });
        for (var x in attribute.options) {
            alert.addInput({
                type: 'checkbox',
                label: attribute.options[x].name,
                value: attribute.options[x].id,
                checked: this.param.attribute_term ? this.param.attribute_term.includes(attribute.options[x].id) : false
            });
        }
        this.translate.get(['CANCEL']).subscribe(function (x) {
            alert.addButton(x.CANCEL);
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.param.attribute = attribute.slug;
                _this.param.attribute_term = data.join();
                _this.loadProducts(_this.param);
            }
        });
        alert.present();
        this.loader.dismiss();
    };
    ProductGridPage.prototype.showCategory = function () {
        var _this = this;
        this.loader.present();
        var alert = this.alert.create();
        this.translate.get(['CATEGORIES', 'CATEGORIES_DESC']).subscribe(function (x) {
            alert.setTitle(x.CATEGORIES);
            alert.setSubTitle(x.CATEGORIES_DESC);
        });
        for (var x in this.categories) {
            alert.addInput({
                disabled: true,
                type: 'radio',
                label: this.categories[x].name
            });
            for (var y in this.categories[x].child) {
                alert.addInput({
                    type: 'radio',
                    label: this.categories[x].child[y].name + ' (' + this.categories[x].child[y].count + ')',
                    value: this.categories[x].child[y],
                    checked: this.categories[x].child[y].id == this.param.id ? true : false
                });
            }
        }
        this.translate.get(['CANCEL']).subscribe(function (x) {
            alert.addButton(x.CANCEL);
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.param.id = data.id;
                _this.param.name = data.name;
                _this.loadSubCategory(_this.param.id);
                _this.loadProducts(_this.param);
            }
        });
        alert.present();
        this.loader.dismiss();
    };
    ProductGridPage.prototype.submit = function () {
        this.param.search = this.search.value.name;
        this.loadProducts(this.param);
    };
    ProductGridPage.prototype.reset = function (e) {
        this.param.search = '';
        this.search.reset();
    };
    ProductGridPage.prototype.backToRoot = function () {
        this.navCtrl.pop();
    };
    ProductGridPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    return ProductGridPage;
}());
ProductGridPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-grid',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\product\grid\grid.html"*/'<ion-header>\n	<ion-navbar hideBackButton="true">\n      <div class="newsearch">\n        <div no-padding class="searchbar searchbar-md">\n          <div class="searchbar-input-container">\n            <button ion-button icon-left icon-only clear tappable (click)="backToRoot()"><ion-icon name="arrow-back"></ion-icon></button>\n            <form [formGroup]="search" (ngSubmit)="submit()" novalidate>\n              <ion-input formControlName="name" class="searchbar-input" placeholder="{{ \'SEARCH\' | translate }}" type="search"></ion-input>\n              <button type="reset" *ngIf="(search.controls[\'name\'].value)" tappable (click)="reset(currForm)" ion-button icon-right icon-only clear><ion-icon name="close"></ion-icon></button>\n            </form>\n          </div>\n        </div>\n        <div class="filter">\n            <ion-scroll scrollX="true" class="item filter">\n              <ion-row nowrap>\n                <ion-col col-auto no-padding>\n                  <button ion-button small round outline (click)="showCategory()">{{param.name || (\'CATEGORIES\' | translate)}}</button>\n                </ion-col>\n                <ion-col col-auto no-padding *ngFor="let x of attributes">\n                  <button ion-button small round outline (click)="showFilter(x)">\n                    {{x.name}} \n                    <span *ngIf="param.attribute_term && param.attribute==x.slug">&nbsp;•&nbsp;{{param.attribute_term.split(",").length}}</span>\n                  </button>\n                </ion-col>\n                <ion-col col-auto no-padding>\n                  <button ion-button small round outline (click)="showSort()">Sort</button>\n                </ion-col>\n              </ion-row>\n            </ion-scroll>\n        </div>\n      </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-scroll scrollX="true" class="item category-slide" *ngIf="subcategory && subcategory.length>0">\n    <ion-row nowrap padding-left padding-top>\n      <ion-col col-auto no-padding *ngFor="let x of subcategory; let i=index">\n        <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.image.src +\')\'}" (click)="goTo(\'ProductGridPage\', x)">\n          <div class="fade"></div>\n          <h5>{{x.name}}</h5>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-scroll>\n\n  <ion-row padding-left padding-right padding-top class="product-grid">\n    <ion-grid class="empty" *ngIf="products.length == 0">\n			<ion-row align-items-center>\n				<ion-col align-self-center text-center>\n					<ion-icon name="basket" color="secondary"></ion-icon>\n					<h4 margin-bottom>{{ \'EMPTY\' | translate}}</h4>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n    <ion-col col-6 *ngFor="let x of products">\n      <div>\n      <button class="fav" (click)="setFav(x)"  ion-button clear icon-only>\n        <ion-icon *ngIf="x.variations.length == 0" no-padding name="heart{{!wishlist.isFav(x) ? \'-outline\' : \'\'}}"></ion-icon>\n      </button>\n      <div text-left class="product-item" (click)="goTo(\'ProductPage\', x)">\n        <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.images[0].src +\')\'}">\n          <ion-badge *ngIf="x.on_sale">{{x | discount}}</ion-badge>\n        </div>\n        <h5 [innerHTML]="x.name"></h5>\n        <div class="price">\n            <span class="disc" *ngIf="x.on_sale">{{x.regular_price | money}}</span> \n            {{x.price | money}}\n        </div>\n        <ion-row no-padding class="reviews" *ngIf="x.rating_count">\n          <ion-col col-auto no-padding>\n            <ion-rating *ngIf="x.average_rating" item-start\n              [numStars]="5"\n              [readOnly]="true"\n              [value]="x.average_rating">\n            </ion-rating>\n            <span *ngIf="x.rating_count">{{x.rating_count}}</span>\n          </ion-col>\n        </ion-row>\n      </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-infinite-scroll *ngIf="more" (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\product\grid\grid.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ProductGridPage);

//# sourceMappingURL=grid.js.map

/***/ })

});
//# sourceMappingURL=7.js.map