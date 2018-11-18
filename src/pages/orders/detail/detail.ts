import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'detail.html',
})
export class OrderDetailPage {
  order: string = "detail";
  data: any;
  
  constructor(public nav: NavController, private params: NavParams) {
    this.data = this.params.data.params;
    console.log(this.params.data.params);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
  }

}
