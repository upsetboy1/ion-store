import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account-chats',
  templateUrl: 'chats.html',
})
export class AccountChatsPage {
  chats = [{
    id: 1,
    imageUrl: 'assets/img/miscellaneous/user.png',
    title: 'Customer Service',
    lastMessage: 'Hello ....?',
    timestamp: new Date()
  },
  {
    id: 2,
    imageUrl: 'assets/img/miscellaneous/user.png',
    title: 'Team Support',
    lastMessage: 'Sorry',
    timestamp: new Date()
  }
  ,
  {
    id: 3,
    imageUrl: 'assets/img/miscellaneous/user.png',
    title: 'Admin',
    lastMessage: 'Good luck',
    timestamp: new Date()
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(chat){
		this.navCtrl.push('AccountChatsMessagePage', {id: chat.id});
	}
}
