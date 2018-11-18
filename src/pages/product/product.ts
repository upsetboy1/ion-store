import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform, ModalController, NavParams } from 'ionic-angular';
import { WishlistProvider, LoadingProvider, ToastProvider, WooCommerceProvider, HistoryProvider } from '../../providers/providers';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})

export class ProductPage {
  product: any;

  variations: any[] = [];
  reviews: any[] = [];
  related: any[] = [];
  isSetVariation: boolean = false;
  
  constructor(private history: HistoryProvider, private alert: AlertController, private platform: Platform, private socialSharing: SocialSharing, private translate: TranslateService, private toast: ToastProvider, private wishlist: WishlistProvider, private navCtrl: NavController, private loader: LoadingProvider, private modal: ModalController, private navParam: NavParams, private woo: WooCommerceProvider) {
    this.loader.present();

    this.product = this.navParam.data.params;
    this.history.post(this.product);

    if(this.product.variations.length > 0){
      this.woo.getProductVariations(this.product.id).then( (val) => {
        this.product.variations = val;
      })
    }

    if(this.product.rating_count > 0){
      this.woo.getProductReviews(this.product.id).then( (val) => {
        this.product.reviews = val;
        this.loader.dismiss();
      })
    }

    this.product.related = this.woo.getProductRelated(this.product.related_ids);
    this.loader.dismiss();
  }

  setVariation(e){
    let x = JSON.parse(e);
    this.product.variation_id = x.id;
    this.product.price = x.price;
    this.product.regular_price = x.regular_price;
    this.product.on_sale = x.on_sale;
    this.product.in_stock = x.in_stock;
    this.product.attributes = x.attributes;
    this.isSetVariation = true;
  }

  viewCart(){
    this.modal.create('MiniCartPage', {}, { cssClass: 'inset-modal' }).present();
  }

  openModal(pageName) {
    if(this.product.variations.length > 0 && !this.isSetVariation){
      this.translate.get(['SELECT_VARIATION']).subscribe( x=> {
        this.toast.show(x.SELECT_VARIATION);
      });
    }else{
      this.modal.create(pageName, {product: this.product}, { cssClass: 'inset-modal' }).present();
      this.translate.get(['ADDED_TO_CART']).subscribe( x=> {
        this.toast.show(x.ADDED_TO_CART);
      });
    }
  }

  setFav(product: any){
    this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe( x=> {
			let msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
			this.wishlist.post(product);
			product.isFav = product.isFav ? false : true;
			this.toast.show(msg);
    });
  }

  share(product: any){
    // console.log(product);
    if (!this.platform.is('cordova')) {
      this.translate.get(['OK', 'ONLY_DEVICE', 'ONLY_DEVICE_DESC']).subscribe( x=> {
        this.alert.create({
          title: x.ONLY_DEVICE,
          message: x.ONLY_DEVICE_DESC,
          buttons: [{
              text: x.OK
            }]
        }).present();
        return false;
      });

    }else{
      let img = [];
      for(let i in product.images)
        img.push(product.images[i].src);
  
      this.socialSharing.share(product.name, product.name, img, product.permalink).then((x) => {
        console.log(x);
        this.toast.show('Successfully shared');
      }).catch((err) => {
        console.log(err);
      });
    }
  }
  
  goTo(page: string, params: any){
		this.navCtrl.push(page, {params: params});
  }

}
