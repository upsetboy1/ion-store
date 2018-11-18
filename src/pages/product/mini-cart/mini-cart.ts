import { Component } from '@angular/core';
import { ViewController, ModalController, AlertController, App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider, LoadingProvider, UserProvider } from '../../../providers/providers';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-mini-cart',
  templateUrl: 'mini-cart.html',
})
export class MiniCartPage {
  total: number = 0;
  isCheckout: boolean = false;
  
  constructor(private translate: TranslateService, private modal: ModalController, private alert: AlertController, private user: UserProvider, private cart: CartProvider, private appCtrl: App, public loader: LoadingProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.isCheckout = this.navParams.data.isCheckout;
    let product = this.navParams.data.product;
    if(this.navParams.data.product)
      this.cart.post(product, 1);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  goCheckout(){
    if(this.user.all){
      this.dismiss();
      this.appCtrl.getRootNav().push('CheckoutPage');
    }
    else{
      this.translate.get(['CHECKOUT_GUEST', 'CHECKOUT_GUEST_MSG', 'NO', 'YES']).subscribe( x=> {
        this.alert.create({
          title: x.CHECKOUT_GUEST,
          message: x.CHECKOUT_GUEST_MSG,
          buttons: [{
              text: x.NO,
              handler: () => {
                this.dismiss();
                this.appCtrl.getRootNav().push('CheckoutPage');
              }
            },{
              text: x.YES,
              handler: () => {
                this.dismiss();
                this.modal.create('LoginPage').present();
              }
            }]
        }).present();
      });
    }
  }
}
