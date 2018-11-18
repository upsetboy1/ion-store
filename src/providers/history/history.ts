import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class HistoryProvider {
  private HISTORY_KEY: string = 'history';

  history: any = [];
  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
    this.load();
  }

  load() {
    return this.storage.get(this.HISTORY_KEY).then((val) => {
      if (val) {
        this.history = val;
        return this.history;
      } else {
        this.save();
      }
    });
  }

  post(product: any){
    let exist = false;
    for(let i in this.history){
      if(this.history[i].id == product.id){
        exist = true;
        break;
      }
    }
    if(!exist)
      this.history.push(product);

    return this.save();
  }

  get clear(){
    this.history = [];
    return this.save();
  }

  save(){
    return this.storage.set(this.HISTORY_KEY, this.history);
  }

  get all() {
    return this.history;
  }
}
