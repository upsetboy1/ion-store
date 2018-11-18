import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { NotifProvider } from '../../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-account-notification',
  templateUrl: 'notification.html',
})
export class AccountNotificationPage {
  notif: any[] = [];
  
  constructor(private _notif: NotifProvider, private alert: AlertController) {
    console.log(_notif.all);
  }

  showAlert(x: any) {
    this.alert.create({
      title: x.title,
      subTitle: x.body,
      buttons: ['OK']
    }).present();
  }

  remove(x: any){
    this._notif.remove(x.id);
  }

  ionViewDidLoad() {
    this.notif = this._notif.all;
    console.log('ionViewDidLoad AccountNotificationPage');
  }

}
