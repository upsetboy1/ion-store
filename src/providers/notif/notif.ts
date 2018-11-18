import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class NotifProvider {
  private NOTIF_KEY: string = 'notif';

  notif: any = [];
  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
    this.load();
  }

  load() {
    return this.storage.get(this.NOTIF_KEY).then((val) => {
      if (val) {
        this.notif = val;
        return this.notif;
      } else {
        this.save();
      }
    });
  }

  remove(id: number){
    for(let i in this.notif){
      if(this.notif[i].id == id){
        this.notif.splice(i, 1);
        break;
      }
    }
    return this.save();
  }

  post(data: any){
    data.id = new Date().getTime();
    this.notif.push(data);
    return this.save();
  }

  get clear(){
    this.notif = [];
    return this.save();
  }

  save(){
    return this.storage.set(this.NOTIF_KEY, this.notif);
  }

  get all() {
    return this.notif;
  }
}
