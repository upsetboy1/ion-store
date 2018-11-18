import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Response } from '@angular/http';
import * as WC from 'woocommerce-api';
import { App } from '../../app/app.global';
import { SettingsProvider } from '../providers';


@Injectable()
export class WooCommerceProvider {

  WooCommerce: any;
  woo: any = {};
  tmp: any;
  
  categories: any = [];

  constructor(public storage: Storage, private http: Http) {
    this.init();
    this.tmp = new SettingsProvider(this.storage);
  }

  loadSetting(){
    return this.WooCommerce.getAsync('system_status').then( (x) => {
        this.tmp.setSettings(JSON.parse(x.body).settings, 'settings');
        return JSON.parse(x.body).settings;
    }, err=> {
      console.log(err);
    });
  }

  saveCountries(){
    return this.WooCommerce.getAsync('settings/general/woocommerce_specific_ship_to_countries').then( (x) => {
      this.tmp.setSettings(JSON.parse(x.body), 'countries');
      return JSON.parse(x.body);
    });
  }

  loadZones() {
    return this.setShippingZone().then( (x) => {
       this.tmp.setSettings(x, 'zones');
       return x;
    })
  }

  loadPayments(){
    return this.WooCommerce.getAsync('payment_gateways').then( (x) => {
      return JSON.parse(x.body);
    });
  }

  getOrders(id: number, page: number, per_page: number, status: string){
    let p = page ? '&page='+page : '';
    let pp = per_page ? '&per_page='+per_page : '&per_page=10';
    let s = status ? '&status='+status : '';

    return this.WooCommerce.getAsync('orders?customer='+id+p+pp+s).then( (x) => {
      let tmp = JSON.parse(x.body);
      let order = {
        paid: [],
        unpaid: []
      }

      for(let i in tmp){
        for(let j in tmp[i].line_items){
          for(let k in tmp[i].line_items[j].meta_data){
            if(tmp[i].line_items[j].meta_data[k].key == 'img')
              tmp[i].line_items[j].img = tmp[i].line_items[j].meta_data[k].value;
          }
        }

        if(tmp[i].status == 'completed')
          order.paid.push(tmp[i]);
        else
          order.unpaid.push(tmp[i]);
      }

      return order;
    });
  }

  getOrderDetail(id: number){
    return this.WooCommerce.getAsync('orders/'+id).then( (x) => {
      return JSON.parse(x.body);
    });
  }

  getZoneLocation(id: number){
    return this.WooCommerce.getAsync('shipping/zones/'+id+'/locations').then( (x) => {
      return JSON.parse(x.body);
    });
  }

  getShippingZoneMethod(id: number){
    return this.WooCommerce.getAsync('shipping/zones/'+id+'/methods').then( (x) => {
      return JSON.parse(x.body);
    });
  }

  getTaxes(){
    return this.WooCommerce.getAsync('taxes').then( (x) => {
      return JSON.parse(x.body);
    });
  }

  getSingleZone(zones, data: any){
    let zone = false, rest = false, tmp;
    for(let i in zones){
      if(zones[i].locations.length > 0){
        for(let j in zones[i].locations){
          if((zones[i].locations[j].type == 'country' && zones[i].locations[j].code == data.country) || 
            (zones[i].locations[j].type == 'state' && zones[i].locations[j].code == data.country+':'+data.state) || 
            (zones[i].locations[j].type == 'postcode' && zones[i].locations[j].code == data.postcode)){
            tmp = zones[i].id;
            zone = true;
            break;
          }
        }
      }
    }

    if(!zone){
      for(let i in zones){
        if(zones[i].locations.length==0 && zones[i].id > 0){ // rest of the world
          tmp = zones[i].id;
          rest = true;
          break;
        }
      }
    }

    if(!zone && !rest && zones[0])
      tmp = zones[0].id;

    return tmp;
  }

  setShippingZone(){
    return this.WooCommerce.getAsync('shipping/zones').then( (x) => {
      let zone = [];
      let tmp = JSON.parse(x.body);
      for(let i in tmp){
        // if(tmp[i].id > 0){
          this.getZoneLocation(tmp[i].id).then( val=> {
            // if(val.length > 0){
                zone.push({
                  id: tmp[i].id,
                  name: tmp[i].name,
                  order: tmp[i].order,
                  locations: val
                });
            // }
          })
        // }
      }
      return zone;
    });
  }

  getProductReviews(id: number){
    return this.WooCommerce.getAsync("products/"+id+"/reviews").then( (x) => {
      return JSON.parse(x.body);
    })
  }

  getProductVariations(id: number){
    return this.WooCommerce.getAsync("products/"+id+"/variations").then( (x) => {
      return JSON.parse(x.body);
      //tmp.price = tmp.variations[0].price + ' - ' + tmp.variations[tmp.variations.length-1].price;
    })
  }

  getSingleProduct(id: number){
    return this.WooCommerce.getAsync("products/"+id).then( (x) => {
      return JSON.parse(x.body);
    })
  }

  getProductRelated(related_ids){
    let tmp = [];
    for(let i in related_ids){
      this.getSingleProduct(related_ids[i]).then( (x) =>{
        tmp.push(x);
      })
    }
    return tmp;
  }

  getAllProducts(page: number, category: number, search: string, min_price: number, max_price: number, per_page: number, status: string, order: string, attribute: string = '', attribute_term: string = ''){//: Promise<any> {
    let p = page ? '&page='+page : '';
    let pp = per_page ? '&per_page='+per_page : '&per_page=10';
    let c = category ? '&category='+category : '';
    let q = search ? '&search='+search : '';
    let min = min_price ? '&min_price='+min_price : '';
    let max = max_price ? '&max_price='+max_price : '';
    let s = status ? '?status='+status : '?status=publish';
    let a = attribute ? '&attribute='+attribute : '';
    let t = attribute_term ? '&attribute_term='+attribute_term : '';
    let o = order ? '&order='+order : '';

    return this.WooCommerce.getAsync("products"+s+p+pp+c+q+min+max+a+t+o).then( (x) => {
      return JSON.parse(x.body);
    });
  }

  getAllCategories(){//: Promise<any> {
    return this.WooCommerce.getAsync("products/categories").then( (x) => {
      return JSON.parse(x.body);
    });
  }

  getAttributeTerms(id: number){
    return this.WooCommerce.getAsync("products/attributes/"+id+"/terms?hide_empty=true").then( (x) => {
      return JSON.parse(x.body);
    });
  }

  getAttributes(){//: Promise<any> {
    return this.WooCommerce.getAsync("products/attributes").then( (x) => {
      return JSON.parse(x.body);
    });
  }

  getStates(id: string){
    let seq = this.http.get('assets/i18n/states/'+id+'.json');
    seq.map((res:Response) => res.json());

    return seq;
  }

  getSubCategories(){
    return this.WooCommerce.getAsync("products/categories").then( (x) => {
      let tmp = JSON.parse(x.body), root = [];
      for(let i in tmp){
        if(tmp[i].parent == 0){
          let child = [];
          child.push({id: tmp[i].id, count: tmp[i].count, image: tmp[i].image, name: 'All '+tmp[i].name, slug: tmp[i].slug});
          for(let j in tmp){
            if(tmp[j].parent == tmp[i].id)
              child.push(tmp[j]);
          }
          tmp[i].child = child;
          root.push(tmp[i]);
        }
      }
      return root;
    });
  }

  createOrder(data: any){
    return this.WooCommerce.postAsync("orders", data).then( (x) => {
      return JSON.parse(x.body);
    }, e=> {
      console.log(e);
    });
  }

  init(){
    this.WooCommerce = WC({
      url: App.url,
			consumerKey: App.consumerKey,
			consumerSecret: App.consumerSecret,
			wpAPI: true, //or false if you want to use the legacy API v3
      version: 'wc/v2', //or wc/v1
      verifySsl: true,
      queryStringAuth: true
    });

    return this.WooCommerce;
  }

}