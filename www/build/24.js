webpackJsonp([24],{

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountChatsMessagePageModule", function() { return AccountChatsMessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountChatsMessagePageModule = (function () {
    function AccountChatsMessagePageModule() {
    }
    return AccountChatsMessagePageModule;
}());
AccountChatsMessagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__message__["a" /* AccountChatsMessagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message__["a" /* AccountChatsMessagePage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AccountChatsMessagePageModule);

//# sourceMappingURL=message.module.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountChatsMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountChatsMessagePage = (function () {
    function AccountChatsMessagePage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toUser = {
            _id: '534b8e5aaa5e7afc1b23e69b',
            pic: 'assets/img/miscellaneous/user.png',
            username: 'CS',
        };
        this.user = {
            _id: '534b8fb2aa5e7afc1b23e69c',
            pic: 'assets/img/miscellaneous/user.png',
            username: 'Me',
        };
        this.doneLoading = false;
        this.messages = [
            {
                _id: 1,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'Hello ....'
            },
            {
                _id: 2,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'Hi, anything we can help?'
            },
            {
                _id: 3,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'Yes, do you accept credit card?'
            },
            {
                _id: 4,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'Yes we do.'
            },
            {
                _id: 5,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'Oh great, thank you.'
            },
            {
                _id: 6,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'You are very welcome'
            },
            {
                _id: 7,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: ':)'
            }
        ];
        this.messageForm = formBuilder.group({
            message: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */]('')
        });
        this.chatBox = '';
    }
    AccountChatsMessagePage.prototype.send = function (message) {
        var _this = this;
        if (message && message !== '') {
            // this.messageService.sendMessage(chatId, message);
            var messageData = {
                toId: this.toUser._id,
                _id: 6,
                date: new Date(),
                userId: this.user._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: message
            };
            this.messages.push(messageData);
            this.scrollToBottom();
            setTimeout(function () {
                var replyData = {
                    toId: _this.toUser._id,
                    _id: 6,
                    date: new Date(),
                    userId: _this.toUser._id,
                    username: _this.toUser.username,
                    pic: _this.toUser.pic,
                    text: 'Just a quick reply'
                };
                _this.messages.push(replyData);
                _this.scrollToBottom();
            }, 1000);
        }
        this.chatBox = '';
    };
    AccountChatsMessagePage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    return AccountChatsMessagePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */])
], AccountChatsMessagePage.prototype, "content", void 0);
AccountChatsMessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-account-chats-message',template:/*ion-inline-start:"E:\ionic\ionstore2\app\src\pages\account\chats\message\message.html"*/'<ion-header>\n	<ion-navbar>\n    <ion-title>Customer Service</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div *ngFor="let message of messages" class="message-wrapper" on-hold="onMessageHold($event, $index, message)">\n      <div *ngIf="user._id !== message.userId">\n        <img (click)="viewProfile(message)" class="profile-pic left" [src]="toUser.pic" onerror="onProfilePicError(this)" />\n        <!--  wave-->\n        <div class="chat-bubble left slide-left">\n  \n          <div class="message" [innerHTML]="message.text" autolinker>\n          </div>\n  \n          <div class="message-detail">\n            <span (click)="viewProfile(message)" class="bold">{{toUser.username}}</span>,\n            <span>{{message.date | moment:"ago" | lowercase}}</span>\n          </div>\n  \n        </div>\n      </div>\n  \n      <div *ngIf="user._id === message.userId">\n  \n        <img (click)="viewProfile(message)" class="profile-pic right" [src]="user.pic" onerror="onProfilePicError(this)" />\n  \n        <div class="chat-bubble right slide-right">\n  \n          <div class="message" [innerHTML]="message.text" autolinker>\n          </div>\n  \n          <div class="message-detail">\n            <span (click)="viewProfile(message)" class="bold">{{user.username}}</span>,\n            <span>{{message.date | moment:"ago" | lowercase}}</span>\n          </div>\n  \n        </div>\n  \n      </div>\n  \n      <div class="cf"></div>\n  \n    </div>\n  </ion-content>\n  <ion-footer>\n    <form [formGroup]="messageForm" (submit)="send(chatBox)" novalidate>\n      <ion-item>\n        <ion-input formControlName="message" [(ngModel)]="chatBox" placeholder="Send {{toUser.username}} a message..."></ion-input>\n        <button ion-button clear (click)="send(chatBox)" item-end><ion-icon class="footer-btn" name="send"></ion-icon></button>\n      </ion-item>\n    </form>\n  </ion-footer>\n'/*ion-inline-end:"E:\ionic\ionstore2\app\src\pages\account\chats\message\message.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]])
], AccountChatsMessagePage);

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=24.js.map