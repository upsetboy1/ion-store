webpackJsonp([23],{

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountHelpPageModule", function() { return AccountHelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountHelpPageModule = (function () {
    function AccountHelpPageModule() {
    }
    return AccountHelpPageModule;
}());
AccountHelpPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__help__["a" /* AccountHelpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* AccountHelpPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AccountHelpPageModule);

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountHelpPage = (function () {
    function AccountHelpPage() {
        this.faqs = [
            { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga' },
            { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga' },
            { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga' },
            { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga' }
        ];
    }
    AccountHelpPage.prototype.toggleSection = function (i) {
        this.faqs[i].open = !this.faqs[i].open;
    };
    AccountHelpPage.prototype.toggleItem = function (i, j) {
        this.faqs[i].child[j].open = !this.faqs[i].child[j].open;
    };
    return AccountHelpPage;
}());
AccountHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-help',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\account\help\help.html"*/'<ion-header no-border no-lines>\n    <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content>\n    <h1 margin-left margin-bottom>{{ \'FAQ\' | translate}}</h1>\n    <ion-list no-padding class="accordion-list">\n        <div *ngFor="let item of faqs; let i = index">\n          <ion-item mode="ios" (click)="toggleSection(i)" [ngClass]="{\'active\':item.open, \'section\': item.open}">\n              {{ item.title }}\n              <ion-icon name="add" item-end></ion-icon>\n          </ion-item>\n          <div padding margin-left class="sub-accordion" *ngIf="item.answer && item.open">\n            {{item.answer}}\n          </div>\n        </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\account\help\help.html"*/,
    }),
    __metadata("design:paramtypes", [])
], AccountHelpPage);

//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=23.js.map