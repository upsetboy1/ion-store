import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AddressProvider {
  private ADDRESS_KEY: string = 'address';

  address: any[] = [];
  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
    this.load();
  }

  load() {
    return this.storage.get(this.ADDRESS_KEY).then((val) => {
      if (val) {
        this.address = val;
        return this.address;
      } else {
        this.save();
      }
    });
  }

  add(data: any){
    this.address.push(data);
    console.log(this.address);
    return this.save();
  }
  
  update(index: number, data: any){
    this.address[index] = data;
    return this.save();
  }

  remove(index: number){
    this.address.splice(index, 1);    
    return this.save();
  }

  getById(id: number){
    let tmp = {};
    for(let i in this.address){
      if(this.address[i].id == id){
        tmp = {
          index: i,
          data: this.address[i]
        }
        break;
      }
    }
    return tmp;
  }

  get getPrimary(){
    let tmp = {};
    for(let i in this.address){
      if(this.address[i].primary){
        tmp = this.address[i];
        break;
      }
    }

    if(this.address.length > 0)
      return tmp;
    else  
      return false;
  }

  get length(){
    return this.address.length;
  }

  setPrimary(index: number){
    for(let i in this.address)
      this.address[i].primary = false;
    this.address[index].primary = true;
    return this.save();
  }

  save(){
    return this.storage.set(this.ADDRESS_KEY, this.address);
  }

  get all() {
    return this.address;
  }
}
