import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CartProvider {
  private CART_KEY: string = 'cart';

  cart: any[] = [];
  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
    this.load();
  }

  load() {
    return this.storage.get(this.CART_KEY).then((val) => {
      if (val && val.length > 0) {
        this.cart = val;
        return this.cart;
      } else {
        this.save();
      }
    });
  }

  post(product: any, qty: number = 1){
    this.toCart(product, qty);
  }

  toCart(product: any, qty: number){
    let exist = false;
    for(let i in this.cart){
      if(this.cart[i].variation_id){
        if(this.cart[i].variation_id == product.variation_id){
          this.cart[i].quantity += qty;
          exist = true;
          break;
        }
      }else{
        if(this.cart[i].id == product.id){
          this.cart[i].quantity += qty;
          exist = true;
          break;
        }
      }
    }

    if(!exist){
      product.quantity = qty;
      this.add(product);
    }

    this.save();
  }

  add(product: any){
    let tmp = {
      quantity: product.quantity,
      name: product.name,
      images: product.images,
      id: product.id,
      price: product.price,
      regular_price: product.regular_price,
      on_sale: product.on_sale,
      in_stock: product.in_stock,
      attributes: product.attributes,
      variation_id: product.variation_id
    }

    this.cart.push(tmp);
    return this.save();
  }

  remove(product: any){
    for(let i in this.cart){
      if(product.variation_id){
        if(this.cart[i].id == product.id && this.cart[i].variation_id == product.variation_id){
          this.cart.splice(parseInt(i), 1);
          break;
        }
      }else{
        if(this.cart[i].id == product.id){
          this.cart.splice(parseInt(i), 1);
          break;
        }
      }
    }
    return this.save();
  }

  get totalQty(){
    return this.cart.length;
  }

  get totalQtyDetail(){
    let qty = 0;
    for(let i in this.cart)
      qty += this.cart[i].quantity;
    return qty;
  }

  get lineItems(){
    let tmp, line_items = [];
    for(let i in this.cart){
      tmp = {
        meta_data: [{
          key: 'img',
          value: this.cart[i].images[0].src
        }],
        product_id: this.cart[i].id,
        quantity: this.cart[i].quantity
      };

      if(this.cart[i].variation_id)
        tmp.variation_id = this.cart[i].variation_id;

      line_items.push(tmp);
    }

    return line_items;
  }

  get total(){
    let total = 0;
    for(let i in this.cart)
      total += parseInt(this.cart[i].price) * parseInt(this.cart[i].quantity);

    return total;
  }

  save(){
    return this.storage.set(this.CART_KEY, this.cart);
  }

  reset(){
    this.cart = [];
    return this.storage.remove(this.CART_KEY).then(() => {});
  }

  get all() {
    return this.cart;
  }
}
