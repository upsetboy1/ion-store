import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams } from 'ionic-angular';
import { CartProvider, UserProvider, WishlistProvider } from '../../providers/providers';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'HomePage';
  tab2Root = 'CartPage';
  tab3Root = 'WishlistPage';
  tab4Root = 'OrdersPage';
  tab5Root = 'AccountPage';
  mySelectedIndex: number = 0;  

  constructor(public user: UserProvider, public wish: WishlistProvider, public cart: CartProvider, public modal: ModalController, public navParams: NavParams) {
    this.mySelectedIndex = this.navParams.data.tabIndex || this.mySelectedIndex;
  }

  isLogin(page, id){
    this.user.load().then( x=> {
      if(x){
        console.log(x);
        this.user.isLoggedIn().map(x => x.json()).subscribe( x => {
          if(!x.valid){
            this.modal.create('LoginPage', {tabIndex: id}).present();
            this.mySelectedIndex = id;
          }
        })
      }else{
        this.modal.create('LoginPage', {tabIndex: id}).present();
        this.mySelectedIndex = id;
      }
    })
  }
}