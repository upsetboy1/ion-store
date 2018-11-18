import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { WooCommerceProvider, ToastProvider, LoadingProvider, WishlistProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { App } from '../../app/app.global';

@IonicPage()
@Component({
  selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	App: any;
	categories: any[] = new Array;
	data: any[] = new Array();
	app: any;

	constructor(public nav: NavController, statusBar: StatusBar, private translate: TranslateService, private toast: ToastProvider, public wishlist: WishlistProvider, public loader: LoadingProvider, public modalCtrl: ModalController, private woo: WooCommerceProvider) {
		this.loader.present();
		this.App = App;

		this.woo.getAllCategories().then( (tmp) => {
			this.categories = tmp;
			this.woo.loadSetting().then( x=> {
				if(x.currency){
					this.app = x;
					for(let i in tmp){
						if(tmp[i].count > 4 && tmp[i].parent !=0){
							this.woo.getAllProducts(null, tmp[i].id, null, null, null, 9, null, null).then( (val) => {
								this.data.push(val);
							})
						}
					}
					this.loader.dismiss();
				}		
			});
		});
	}

	setFav(product: any){
		this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe( x=> {
			let msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
			this.wishlist.post(product);
			product.isFav = product.isFav ? false : true;
			this.toast.show(msg);
		});
	}

	 showSearch() {
	 	this.modalCtrl.create('SearchPage').present();
	 }

	goTo(page, params){
		this.nav.push(page, {params: params});
	}

}
