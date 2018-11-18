import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SettingsProvider {
  private SETTINGS_KEY: string = 'settings';

  settings: any = {};
  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
    this.load();
  }

  load() {
    return this.storage.get(this.SETTINGS_KEY).then((val) => {
      if (val) {
        this.settings = val;
        return this.settings;
      } else {
        this.storage.set(this.SETTINGS_KEY, this.settings);
      }
    });
  }

  getCountries(){
    let countries = [];
    let val = this.settings.countries;
    if(val.value.length == 0){
      for(let i in val.options)
        countries.push({id: i, name: val.options[i]});
    }else{
      for(let i in val.value)
        countries.push({id: i, name: val.value[i]});
    }
    return countries;
  }

  setSettings(data, id: string){
    let tmp = this.settings;
    tmp[id] = data;
    return this.save(tmp);
  }

  save(data){
    return this.storage.set(this.SETTINGS_KEY, data);
  }

  get all() {
    return this.settings;
  }
}
