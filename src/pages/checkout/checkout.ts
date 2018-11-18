import { Component } from '@angular/core';
import { IonicPage, Platform, AlertController, NavController, Events, ModalController, NavParams } from 'ionic-angular';
import { AddressProvider, SettingsProvider, ToastProvider, UserProvider, LoadingProvider, CartProvider, WooCommerceProvider, OrderProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})

export class CheckoutPage {
  checkout: string = "shipping";  
  cart: any;
  settings: any;
  billing: any;
  shipping: any;
  zones: any;
  shipping_lines: any[] = [];
  shipping_method: any = [];
  payments: any[] = [];
  tax: any;
  order: any = {};
  total: number;

  stripe: any = {
    no: '',
    month: '',
    year: ''
  };

  months: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: any = [];

  img: any = {
    stripe: [
      'assets/img/logo/visa.svg',
      'assets/img/logo/mastercard.svg',
      'assets/img/logo/amex.svg',
      'assets/img/logo/diners.svg',
      'assets/img/logo/discover.svg',
      'assets/img/logo/jcb.svg'
    ],
    paypal: [
      'assets/img/logo/visa.svg',
      'assets/img/logo/mastercard.svg',
      'assets/img/logo/amex.svg',
      'assets/img/logo/discover.svg'
    ]
  };

  constructor(private setting: SettingsProvider, private alert: AlertController, private platform: Platform, private nav: NavController, private translate: TranslateService, private toast: ToastProvider, private user: UserProvider, private loader: LoadingProvider, private woo: WooCommerceProvider, private _cart: CartProvider, private events: Events, private _order: OrderProvider, private address: AddressProvider, public navParams: NavParams, public modal: ModalController) {
    this.woo.loadPayments().then( x=> {
      this.payments = x;

    });

    this.cart = this._cart;

    if(this.setting.all.zones.length <= 0){
      this.loader.present();
      this.woo.loadZones();  
      this.setting.load().then(x=>{
        this.zones = x.zones;
        this.loader.dismiss();
      })
    }else
      this.zones = this.setting.all.zones;

    // this.woo.getTaxes().then( x=> {
    //   this.tax = x;
    //   console.log(x);
    // })

    this.listenOrder();
  }

  ionViewDidEnter(){
    this.setOrder();
  }

  setOrder(){

    if(this.address.getPrimary){
      this.billing = this.address.getPrimary;
      this.shipping = this.address.getPrimary;
    }

    if(this._order.billing)
      this.billing = this._order.billing;
  
    if(this._order.shipping)
      this.shipping = this._order.shipping;

    //let tmp = (this.settings.value == 'shipping') ? this.shipping : this.billing;

    if(this.shipping){
      let id = this.woo.getSingleZone(this.setting.all.zones, this.shipping);
      if(id){
        this.loader.present();
        this.woo.getShippingZoneMethod(id).then( x=> {
          this.shipping_method = x;
          this.loader.dismiss();
        }, e=> {
          console.log(e);
        });
      }else{
        this.shipping_method = [];
        this.translate.get(['NO_SHIPPING']).subscribe( x=> {
          this.toast.showWithClose(x.NO_SHIPPING);
        });
      }
    }else{
      this.translate.get(['SELECT_SHIPPING']).subscribe( x=> {
        this.toast.showWithClose(x.SELECT_SHIPPING);
      });
    }
  }

  viewCart(){
    this.modal.create('MiniCartPage', {isCheckout: true}, { cssClass: 'inset-modal' }).present();
  }

  setShipping(param){
    this.shipping_lines = [];
    let e = JSON.parse(param);
    this.shipping_lines.push({
      method_id: e.method_id,
      method_title: e.title,
      total: (e.settings.cost ? e.settings.cost.value : 0)
    });

    this.total = this.cart.total + parseInt(this.shipping_lines[0].total);
  }

  setPayment(param){
    this.years = [];
    let e = JSON.parse(param);
    this.order.payment_method = e.id;
    this.order.payment_method_title = e.method_title;
    this.order.payment_method_description = e.description;
    if(e.id == 'paypal' || e.id == 'stripe') this.order.set_paid = true;
    for(let i in this.payments)
      this.payments[i].open = false;
    
    this.payments[e.order].open = true || !this.payments[e.order].open;
    if(e.id == 'stripe'){
      if(e.settings.testmode.value == 'yes'){
        this.stripe.publishable_key = e.settings.test_publishable_key.value;
        this.stripe.secret_key = e.settings.test_secret_key.value;
      }else{
        this.stripe.publishable_key = e.settings.publishable_key.value;
        this.stripe.secret_key = e.settings.secret_key.value;
      }

      for(let i=0; i<10; i++)
        this.years.push(new Date().getFullYear() + i);
      
    }
  }

  listenOrder(){
    this.events.subscribe('order:go', (res) => {
      this.setOrder();
    });
  }

  selectAddress(action){
    let params = {
      action: action
    }
    this.modal.create('SavedAddressPage', {params: params}).present();
  }

  addAddress(action){
    let params = {
      action: action
    }
    this.modal.create('AddAddressPage', {params: params}).present();
  }

  next(){
    this.checkout = 'payment';
  }

  confirm(){
    this.loader.present();
    this.order.billing = this.billing;
    this.order.shipping = this.shipping;
    this.order.line_items = this.cart.lineItems;
    this.order.shipping_lines = this.shipping_lines;
    if(this.user.all) this.order.customer_id = this.user.id;

    // console.log(this.stripe);
    // console.log(this.order);
    //this.loader.dismiss();

    // CHECKOUT WITH PAYPAL
    if(this.order.payment_method == 'paypal'){
      if (!this.platform.is('cordova')) {
        this.translate.get(['OK', 'ONLY_DEVICE', 'ONLY_DEVICE_DESC']).subscribe( x=> {
          this.alert.create({
            title: x.ONLY_DEVICE,
            message: x.ONLY_DEVICE_DESC,
            buttons: [{
                text: x.OK
              }]
          }).present();
          this.loader.dismiss();
          return false;
        });
      }else{
        let opt = {
            total: this.total,
            currency: this.setting.all.settings.currency,
            desc: this.order.payment_method_description,
            detail: {
              subtotal: this.cart.total,
              shipping: parseInt(this.shipping_lines[0].total)
          }
        }

        this._order.checkoutPaypal(this.order, opt).then((res)=>{
          if(res){
            this.createOrder(this.order);
          }else{
            this.loader.dismiss();
            this.toast.show(res);
          }
        }, err=>{
          this.loader.dismiss();
          this.toast.show(err);
        });  
      }

    // CHECKOUT WITH STRIPE
    }else if(this.order.payment_method == 'stripe'){
      if (!this.platform.is('cordova')) {
        this.translate.get(['OK', 'ONLY_DEVICE', 'ONLY_DEVICE_DESC']).subscribe( x=> {
          this.alert.create({
            title: x.ONLY_DEVICE,
            message: x.ONLY_DEVICE_DESC,
            buttons: [{
                text: x.OK
              }]
          }).present();
          this.loader.dismiss();
          return false;
        });

      }else{
        this.stripe.total = this.total * 100;
        this.stripe.carrier = this.order.shipping_lines[0].method_title;
        this.stripe.shipping = this.order.shipping;
        if(this.user.all) 
          this.stripe.customer_id = this.user.id;
        this.stripe.billing = this.order.billing;
        this.stripe.device = this.platform.platforms();
        this.stripe.currency = this.setting.all.settings.currency;
        this._order.getToken(this.stripe).then((token)=>{
          if(token.id){
            this._order.stripeCharge(this.stripe, token)
              .subscribe( (res) => {
                  console.log(res);
                  this.createOrder(this.order);
              }, err => {
                this.loader.dismiss();
                this.toast.showWithClose(err.json().error.message);        
              });
          }else{
            console.log(token);
            this.loader.dismiss();
            this.toast.showWithClose(token);
          }
        }, err => {
          console.log(err);
          this.loader.dismiss();
          this.toast.showWithClose(err);
        })
      }

    }else

      // OTHERWISE PAYPAL OR STRIPE
      this.createOrder(this.order);

  }

  createOrder(order: any){
    this.woo.createOrder(order).then( x=>{
      if(x){
        this._order.reset().then(() => {});
        this.cart.reset().then(() => {});
        this.goTo('ThanksPage', x);
      }else{
        this.toast.showWithClose('Error 401');
      }
      this.loader.dismiss();
    }, err=> {
      this.loader.dismiss();
      this.toast.show(err);
    })
  }

  goTo(page, params){
    this.nav.push(page, {params: params});
  }

}
