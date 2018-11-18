import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class WishlistProvider {
  private WISHLIST_KEY: string = 'wish';

  wishlist: any[] = [];
  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
    this.load();
  }

  load() {
    return this.storage.get(this.WISHLIST_KEY).then((val) => {
      if (val && val.length > 0) {
        this.wishlist = val;
        return this.wishlist;
      } else {
        this.save();
      }
    });
  }

  post(product: any){
    if(product.isFav)
      this.remove(product);
    else
      this.setFav(product);
  }

  isFav(product: any){
    let exist = false;
    for(let i in this.wishlist){
      if(this.wishlist[i].id == product.id){
        exist = true;
        break;
      }
    }

    return exist;
  }

  get total(){
    return this.wishlist.length ||  0;
  }

  setFav(product: any){
    this.wishlist.push(product);
    return this.save();
  }

  remove(product: any){
    for(var i in this.wishlist){
      if(this.wishlist[i].id == product.id){
        this.wishlist.splice(parseInt(i), 1);
        break;
      }
    }
    return this.save();
  }

  save(){
    return this.storage.set(this.WISHLIST_KEY, this.wishlist);
  }

  setFirst(value: any) {
    return this.storage.set(this.WISHLIST_KEY, value);
  }

  get all() {
    return this.wishlist;
  }
}
