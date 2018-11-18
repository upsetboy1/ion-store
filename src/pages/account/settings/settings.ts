import { Component } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';
import { IonicPage, Platform, AlertController, NavController } from 'ionic-angular';
import { UserProvider } from '../../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { App } from '../../../app/app.global';

@IonicPage()
@Component({
  selector: 'page-account-settings',
  templateUrl: 'settings.html',
})
export class AccountSettingsPage {
  app: any;

  constructor(public navCtrl: NavController, private platform: Platform, private appVersion: AppVersion, private translate: TranslateService, private alert: AlertController, private user: UserProvider) {
    this.app = App;
    if (this.platform.is('cordova')) {
      this.appVersion.getVersionNumber().then( res=> {
        this.app.version = res;
      })
    }
  }

  logout() {
    this.translate.get(['LOGOUT', 'LOGOUT_MSG', 'YES', 'CANCEL']).subscribe( x=> {
      let confirm = this.alert.create({
        title: x.LOGOUT,
        message: x.LOGOUT_MSG,
        buttons: [{
            text: x.CANCEL
          },{
            text: x.YES,
            handler: () => {
              this.confirmLogout();
            }
          }]
      });
      confirm.present();
    });

  }

  confirmLogout(){
    this.user.logout().then(() => {
      this.navCtrl.popToRoot();
      this.navCtrl.parent.select(0);
    });
  }

  goTo(page, params){
		this.navCtrl.push(page, {params: params});
	}

}
