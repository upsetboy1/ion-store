import { Component } from '@angular/core';
import { IonicPage, Keyboard, App, ViewController, NavController, AlertController } from 'ionic-angular';
import { WooCommerceProvider, ToastProvider, LoadingProvider, HistoryProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {
	private search : FormGroup;

	showCancel: boolean;
	products: any;

	categories: any = [];
	app: any;

	constructor(private translate: TranslateService, keyboard: Keyboard, fb: FormBuilder, public history: HistoryProvider, private toast: ToastProvider, private loader: LoadingProvider, public appCtrl: App, public alertCtrl: AlertController, public viewCtrl: ViewController, public navCtrl: NavController, private woo: WooCommerceProvider) {
		this.loader.present();
		
		this.search = fb.group({
			search: ''
		});

		this.woo.getSubCategories().then( (val) => {
			this.categories = val;
			this.loader.dismiss();
			keyboard.hasFocusedTextInput();
		});
	}

	submit(){
		this.goTo('ProductGridPage', this.search.value);
	}

	toggleSection(i) {
		this.categories[i].open = !this.categories[i].open;
	}

	toggleItem(i, j) {
		this.categories[i].children[j].open = !this.categories[i].children[j].open;
	}

	ionViewWillEnter(){
		this.loadHistory();
	}
	
	loadHistory(){
		this.history.load().then(() => { });
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}

	reset(e){
		this.search.reset();
	}

	confirmRemove(){
		this.history.clear;
		this.translate.get(['HISTORY_CLEAR']).subscribe( x=> {
			this.toast.show(x.HISTORY_CLEAR);
		});
	}

	resetHistory(product) {
		this.translate.get(['HISTORY_TITLE', 'HISTORY_DESC', 'CANCEL', 'YES']).subscribe( x=> {
			this.alertCtrl.create({
				title: x.HISTORY_TITLE,
				message: x.HISTORY_DESC,
				buttons: [{
					text: x.CANCEL
				},{
					text: x.YES,
					handler: () => {
						this.confirmRemove();
					}
				}]
			}).present();
		});
	}

	goTo(page: string, params: any){
		this.dismiss();
		this.appCtrl.getRootNav().push(page, {params: params});
	}

}
