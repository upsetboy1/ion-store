import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController, NavParams, ActionSheetController } from 'ionic-angular';
import { WooCommerceProvider, ToastProvider, LoadingProvider, WishlistProvider } from '../../../providers/providers';
import { TranslateService } from '@ngx-translate/core';

import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-product-grid',
  templateUrl: 'grid.html',
})
export class ProductGridPage {
  private search : FormGroup;

  showCancel: boolean;
  
  param: any = {};
  
  WooCommerce: any;
  subcategory: any;
  products: any[] = [];

  attributes: any[] = [];
  categories: any;
  min: number;
  max: number;
  
  page: number;
  more: boolean;

  constructor(public toast: ToastProvider, private alert: AlertController, fb: FormBuilder, private translate: TranslateService, private loader: LoadingProvider, public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private woo: WooCommerceProvider, public wishlist: WishlistProvider, public actionSheetCtrl: ActionSheetController) {
    this.page = 1;
    this.param.name = this.navParams.data.params.name;
    this.param.id = this.navParams.data.params.id;
    this.param.search = this.navParams.data.params.search;
    this.param.per_page = 10;

    this.search = fb.group({
			name: this.param.name || this.param.search
    });

    this.woo.getSubCategories().then( (val) => {
      this.categories = val;
      this.loadSubCategory(this.param.id);
    });

    this.woo.getAttributes().then((tmp) => {
      for(let i in tmp){
        this.attributes[i] = tmp[i];
        this.woo.getAttributeTerms(tmp[i].id).then((val) => {
          if(val){
            for(let j in val){
              val[j].checked = false;
              this.attributes[i].options = val;
            }
          }
        })
      }
    });

    // this.param.min = this.min;
    // this.param.max = this.max;
    this.loadProducts(this.param);
  }

  loadSubCategory(id){
    this.subcategory = [];
    for(let i in this.categories){
      if(this.categories[i].id == id){
        this.subcategory = this.categories[i].child;
        break;
      }
    }
  }

  loadProducts(x: any){

    this.loader.present();
    this.woo.getAllProducts(1, x.id, x.search, null, null, x.per_page, null, x.order, x.attribute, x.attribute_term).then((val) => {
      this.products = val;
      
      if (this.products.length == x.per_page)
        this.more = true;
      
      this.loader.dismiss();
    });
  }

  loadMoreProducts(event){
    this.page++;

    this.woo.getAllProducts(this.page, this.param.id, this.param.search, null, null, this.param.per_page, null, this.param.order, this.param.attribute, this.param.attribute_term).then((val) => {
      let temp = val;
      event.complete();
      this.products = this.products.concat(temp);

      if (temp.length < this.param.per_page){
        this.more = false;
        event.enable(false);

        this.translate.get(['NOMORE']).subscribe( x=> {
          this.toast.show(x.NOMORE);
        });
      }
    }, (err) => {
      console.log(err)
    });
  }

  showSort() {
    this.translate.get(['SORT', 'NEWEST', 'OLDEST', 'CANCEL']).subscribe( x=> {
      this.actionSheetCtrl.create({
        title: x.SORT,
        buttons: [{
            text: x.NEWEST,
            handler: () => {
              this.param.order = 'desc';
              this.loadProducts(this.param);
            }
          },{
            text: x.OLDEST,
            handler: () => {
              this.param.order = 'asc';
              this.loadProducts(this.param);
            }
          },{
            text: x.CANCEL,
            role: 'cancel'
          }
        ]
      }).present();
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

  showFilter(attribute: any){
    this.loader.present();
    let alert = this.alert.create();
    alert.setTitle(attribute.name);
    this.translate.get(['FILTER_DESC'], {value: attribute.name}).subscribe( x=> {
      alert.setSubTitle(x.FILTER_DESC);
    });

    for(let x in attribute.options){
      alert.addInput({
        type: 'checkbox',
        label: attribute.options[x].name,
        value: attribute.options[x].id,
        checked: this.param.attribute_term ? this.param.attribute_term.includes(attribute.options[x].id) : false
      });
    }

    this.translate.get(['CANCEL']).subscribe( x=> {
      alert.addButton(x.CANCEL);
    });

    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.param.attribute = attribute.slug;
        this.param.attribute_term = data.join();  
        this.loadProducts(this.param);
      }
    });

    alert.present();
    this.loader.dismiss();
  }

  showCategory(){
    this.loader.present();
    let alert = this.alert.create();
    this.translate.get(['CATEGORIES', 'CATEGORIES_DESC']).subscribe( x=> {
      alert.setTitle(x.CATEGORIES);
      alert.setSubTitle(x.CATEGORIES_DESC);
    });
   
    for(let x in this.categories){
      alert.addInput({
        disabled: true,
        type: 'radio',
        label: this.categories[x].name
      });
      for(let y in this.categories[x].child){
        alert.addInput({
          type: 'radio',
          label: this.categories[x].child[y].name+' ('+this.categories[x].child[y].count+')',
          value: this.categories[x].child[y],
          checked: this.categories[x].child[y].id == this.param.id ? true : false
        });
      }
    }

    this.translate.get(['CANCEL']).subscribe( x=> {
      alert.addButton(x.CANCEL);
    });
    
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.param.id = data.id;
        this.param.name = data.name;
        this.loadSubCategory(this.param.id);
        this.loadProducts(this.param);
      }
    });
    alert.present();
    this.loader.dismiss();
  }

  submit(){
    this.param.search = this.search.value.name;
    this.loadProducts(this.param);
  }

  reset(e){
    this.param.search = '';
		this.search.reset();
	}

  backToRoot(){
    this.navCtrl.pop();
  }

  goTo(page, params){
    this.navCtrl.push(page, {params: params});
  }

}
