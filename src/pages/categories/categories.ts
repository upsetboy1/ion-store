import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WooCommerceProvider, LoadingProvider } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories : any[];

  constructor(private nav: NavController, private loader: LoadingProvider, private woo: WooCommerceProvider) {
    this.loader.present();
    this.woo.getSubCategories().then( (val) => {
			this.categories = val;
      this.loader.dismiss();
		});
  }

  toggleSection(i) {
    this.categories[i].open = !this.categories[i].open;
  }

  toggleItem(i, j) {
    this.categories[i].child[j].open = !this.categories[i].child[j].open;
  }

  goTo(page, params){
    this.nav.push(page, {params: params});
  }

}
