import { Component } from '@angular/core';
import { IonicPage, Refresher, Events, ModalController, NavController } from 'ionic-angular';
import { UserProvider, LoadingProvider, WooCommerceProvider } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  status: string = "paid";
  orders: any = [];

  constructor(public nav: NavController, private events: Events, private modal: ModalController, private loader: LoadingProvider, private user: UserProvider, private woo: WooCommerceProvider) {
    this.setRootForGuest();
    this.listenIsLoggedIn();
    this.listenIsLoggedOut();
    
    this.setForUser();
  }

  listenIsLoggedIn(){
    this.events.subscribe('user:login', (res) => {
      this.setForUser();
    });
  }

  listenIsLoggedOut(){
    this.events.subscribe('user:logout', () => {
      this.setRootForGuest();
    });
  }

  setRootForGuest(){
    this.orders = {
      paid: [],
      unpaid: []
    }
  }

  setForUser(status: string = ''){
    if(this.user.all){
      this.woo.getOrders(this.user.id, null, null, status).then( x=> {
        this.loader.dismiss();
        this.orders = x;        
      }, err => {
        this.loader.dismiss();    
      });
    }
  }

  doRefresh(status: string, refresher: Refresher) {
    this.setForUser(status);
    refresher.complete();
  }

  doPulling(refresher: Refresher) {
    // console.log('DOPULLING', refresher.progress);
  }

  login(){
    this.modal.create('LoginPage', {}).present();
  }

  goHome(){
    this.nav.parent.select(0);
  }

  goTo(params){
    this.nav.push('OrderDetailPage', {params: params});
  }

}
