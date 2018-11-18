import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { AppRate } from '@ionic-native/app-rate';
import { AppVersion } from '@ionic-native/app-version';
import { IonicPage, AlertController, ModalController, Platform, NavController, NavParams } from 'ionic-angular';
import { UserProvider, NotifProvider, AddressProvider } from '../../providers/providers';
import { App } from '../../app/app.global';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
	notif: any;
	address: any;
	user: any;

	constructor(private emailComposer: EmailComposer, private appVersion: AppVersion, private appRate: AppRate, private translate: TranslateService, private alert: AlertController, private platform: Platform, private _notif: NotifProvider, public navCtrl: NavController, private _address: AddressProvider, private modal: ModalController, private _user: UserProvider, public navParams: NavParams) {
		this.notif = this._notif;
		this.address = this._address;
		this.user = this._user;
	}

	ionViewDidLoad() {
				
	}

	rateUs(){
		if (!this.platform.is('cordova')) {
			this.translate.get(['OK', 'ONLY_DEVICE', 'ONLY_DEVICE_DESC']).subscribe( x=> {
				this.alert.create({
					title: x.ONLY_DEVICE,
					message: x.ONLY_DEVICE_DESC,
					buttons: [{text: x.OK}]
				}).present();
				return false;
			});
	
		}else{
			this.appVersion.getAppName().then( res=> {
				this.appRate.preferences.displayAppName = res;
			});

			this.appVersion.getPackageName().then( res=> {
				this.appRate.preferences.storeAppURL = {
					//ios: '<app_id>', // FOR IOS
					android: 'market://details?id='+res, // FOR ANDROID, use your own android package name
					//windows: 'ms-windows-store://review/?ProductId=<store_id>' // FOR WINDOWS APP
				};
				this.appRate.promptForRating(true);
			})
		}
	}

	goProfile(){
		this.modal.create('AccountProfilePage').present();
	}

	goTo(page, params){
		this.navCtrl.push(page, {params: params});
	}

	emailUs(){
		if (this.platform.is('cordova')) {
			this.emailComposer.isAvailable().then((available: boolean) =>{
				// this.emailComposer.addAlias('gmail', 'com.google.android.gm');  // if you want to use gmail
				let email = {
					//app: 'gmail', // if you want to use gmail
					to: App.ContactEmail,
					//bcc: ['john@doe.com', 'jane@doe.com'],
					//  attachments: [
					// 	 'file://img/logo.png',
					// 	 'res://icon.png',
					// 	 'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
					// 	 'file://README.pdf'
					//  ],
					subject: 'App Support',
					body: 'Hi, please help me.',
					isHtml: true
				};
				
				this.emailComposer.open(email);
			});
		}else{
			this.translate.get(['ONLY_DEVICE', 'ONLY_DEVICE_DESC', 'OK']).subscribe( x=> {
				this.alert.create({
					title: x.ONLY_DEVICE,
					message: x.ONLY_DEVICE_DESC,
					buttons: [{
						text: x.OK
					}]
				}).present();
			});
		}
	}

	login(){
		this.modal.create('LoginPage', {}).present();
	}

}
