import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController } from 'ionic-angular';
import { CartProvider, SettingsProvider, UserProvider, ToastProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})

export class CartPage {
  products: any = [];
  app: any;
  total: number = 0;

  constructor(public cart: CartProvider, public setting: SettingsProvider, private translate: TranslateService, private modal: ModalController, private user: UserProvider, private toast: ToastProvider, public nav: NavController, public alert: AlertController) {
    
  }

  ionViewWillEnter(){
    this.cart.load().then(() => {
      this.products = this.cart.all;
      this.total = this.cart.total;
    });

    this.app = this.setting.all.settings;
  }

  updateTotal(){
    this.total = this.cart.total;
  }

  remove(product) {
    this.translate.get(['REMOVE_TTL', 'REMOVE_MSG', 'CANCEL', 'YES']).subscribe( x=> {
      this.alert.create({
        title: x.REMOVE_TTL,
        message: x.REMOVE_MSG,
        buttons: [{
            text: x.CANCEL
          },{
            text: x.YES,
            handler: () => {
              this.confirmRemove(product);
            }
          }]
      }).present();
    });
  }

  confirmRemove(product: any){
    this.cart.remove(product);
    this.translate.get('REMOVE_FROM_CART').subscribe( x=> {
      this.toast.show(x);
    });
  }

  goHome(){
    this.nav.parent.select(0);
  }

  goCheckout(){
    if(this.user.all)
      this.nav.push('CheckoutPage');
    else{
      this.translate.get(['CHECKOUT_GUEST', 'CHECKOUT_GUEST_MSG', 'NO', 'YES']).subscribe( x=> {
        this.alert.create({
          title: x.CHECKOUT_GUEST,
          message: x.CHECKOUT_GUEST_MSG,
          buttons: [{
              text: x.NO,
              handler: () => {
                this.nav.push('CheckoutPage', {guest: true});
              }
            },{
              text: x.YES,
              handler: () => {
                this.modal.create('LoginPage').present();
              }
            }]
        }).present();
      });
    }
  }

}
