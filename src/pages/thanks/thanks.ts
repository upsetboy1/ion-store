import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html',
})
export class ThanksPage {
  rootPage: any;
  data: any;

  constructor(private nav: NavController, public navParams: NavParams) {
    this.data = this.navParams.data.params;
  }

  goHome(){
    this.nav.popToRoot();
    this.nav.parent.select(0);
  }

}
