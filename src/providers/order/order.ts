import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { App } from '../../app/app.global';
import { PayPal, PayPalPaymentDetails, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Stripe } from '@ionic-native/stripe';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 

@Injectable()
export class OrderProvider {
  private ORDER_KEY: string = 'order';

  order: any = {};
  woo: any;

  _readyPromise: Promise<any>;

  constructor(private storage: Storage, private http: Http, private stripe: Stripe, private events: Events, private payPal: PayPal) {
    this.load();
  }

  load() {
    return this.storage.get(this.ORDER_KEY).then((val) => {
      if (val) {
        this.order = val;
        return this.order;
      } else {
        this.save();
      }
    });
  }

  setBilling(billing: any){
    this.order.billing = billing;
    this.events.publish('order:go');
    return this.save();
  }

  setShipping(shipping: any){
    this.order.shipping = shipping;
    this.events.publish('order:go');
    return this.save();
  }

  get billing(){
    return this.order.billing;
  }

  get shipping(){
    return this.order.shipping;
  }

  getToken(opt: any){
    this.stripe.setPublishableKey(opt.publishable_key);
    let card = {
      number: opt.no,
      expMonth: opt.month,
      expYear: opt.year,
      cvc: opt.cvc
    }
    return this.stripe.createCardToken(card)
    .then(token => {
      return token;
    }, (err) => {
      return err;
    });
  }

  stripeCharge(opt: any, token: any){
    let data = new URLSearchParams(opt);
    data.set('currency', opt.currency);
    data.set('amount', opt.total);
    data.set('description', opt.billing.first_name + ' - ' + opt.total);
    data.set('receipt_email', opt.billing.email);

    if(opt.customer_id) // IF USER LOGGED IN
      data.set("metadata[Customer ID]", opt.customer_id);

    data.set("metadata[Customer Email]", opt.billing.email);
    data.set("metadata[Customer Name]", opt.billing.first_name);
    data.set("metadata[Customer Device]", opt.device);

    data.set('shipping[phone]', opt.shipping.phone);
    data.set('shipping[carrier]', opt.carrier);
    data.set('shipping[name]', opt.shipping.first_name);
    data.set('shipping[address][line1]', opt.shipping.address_1);
    data.set('shipping[address][postal_code]', opt.shipping.postcode);
    data.set('shipping[address][city]', opt.shipping.city);
    data.set('shipping[address][state]', opt.shipping.state);
    data.set('shipping[address][country]', opt.shipping.country);
    data.set('source', token.id);


    let headers = new Headers();
    headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    headers.set('Authorization', 'Bearer ' + opt.secret_key);

    let options = new RequestOptions({headers: headers});

    let seq = this.http.post('https://api.stripe.com/v1/charges', data.toString(), options);
    seq.map((res:Response) => {
      res.json();
      console.log(res.json());
    });
    
    return seq;
  }

  checkoutPaypal(order: any, opt: any){
    return this.payPal.init({
      PayPalEnvironmentProduction: App.paypalLiveClientID,
      PayPalEnvironmentSandbox: App.paypalSandboxClientID
    }).then(() => {
      return this.payPal.prepareToRender(App.paypalState, new PayPalConfiguration({
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let paymentDetail = new PayPalPaymentDetails(
            opt.detail.subtotal.toFixed(2), 
            opt.detail.shipping.toFixed(2), '0.00'
        );
        let payment = new PayPalPayment(opt.total.toFixed(2), opt.currency, opt.desc, 'sale', paymentDetail);
        return this.payPal.renderSinglePaymentUI(payment).then((x) => {
          return x;
          // Successfully paid`
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, (err) => {
          console.log(err);
        });
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }

  reset(){
    this.order = {};
    return this.storage.remove(this.ORDER_KEY).then(() => {});
  }

  save(){
    return this.storage.set(this.ORDER_KEY, this.order);
  }
}
