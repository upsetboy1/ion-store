import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Response } from '@angular/http';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { App } from '../../app/app.global';

@Injectable()
export class UserProvider {
  private USER_KEY: string = 'user';

  user: any = {};
  _readyPromise: Promise<any>;

  constructor(public storage: Storage, public events: Events, private http: Http) {
    this.load();
    App.url = App.url+'/api';
    // console.log(App.url);
  }

  load() {
    return this.storage.get(this.USER_KEY).then((val) => {
      if (val)
        this._loggedIn(val, 0);
    });
  }

  _loggedIn(user, index){
    this.user = user;
    this.save();
    this.events.publish('user:login', {tabIndex: index});
    return this.user;
  }

  login(data: any){
    let seq = this.http.get(App.url+'/user/generate_auth_cookie/?insecure=cool&username='+data.user+'&password='+data.pass);
    seq.map((res:Response) => {});
      
    return seq;
  }

  reset(data: any){
    let seq = this.http.get(App.url+'/user/retrieve_password/?insecure=cool&user_login='+data.email);
    seq.map((res:Response) => {});
      
    return seq;
  }

  signup(data: any){
    let seq = this.http.get(App.url+'/user/register/?insecure=cool&nonce='+data.nonce+'&first_name='+data.name+'&display_name='+data.name+'&username='+data.user+'&user_pass='+data.pass+'&email='+data.email);
    seq.map((res:Response) => res.json());

    return seq;
  }

  update(data: any){
    let cookie = this.user.cookie;
    let f = data.first ? '&first_name='+data.first : '';
    let l = data.last ? '&last_name='+data.last : '';
    let b = data.bio ? '&description='+data.bio : '';

    let seq = this.http.get(App.url+'/user/update_user_meta_vars/?insecure=cool&cookie='+cookie+f+l+b);
    seq.map((res:Response) => res.json());

    return seq;
  }

  nonce(controller, method){
    let seq = this.http.get(App.url+'/get_nonce/?controller='+controller+'&method='+method);
    seq.map((res:Response) => res.json());

    return seq;
  }

  isLoggedIn(){
    let cookie = this.user.cookie;
    let seq = this.http.get(App.url+'/user/validate_auth_cookie/?insecure=cool&cookie='+cookie);
    seq.map((res:Response) => res.json());
    return seq;
  }

  logout(){
    this.user = {};
    return this.storage.remove(this.USER_KEY).then(() => {
      this.events.publish('user:logout');
    });
  }

  setUserUpdate(data: any){

    if(data.first)
      this.user.user.firstname = data.first;
    if(data.last)
      this.user.user.lastname = data.last;
    if(data.bio)
      this.user.user.description = data.bio;
    
    return this.save();
  }

  get email(){
    if(this.user.user.email)
      return this.user.user.email;
  }

  get name(){
    if(this.user.user.displayname)
      return this.user.user.displayname;
  }

  get firstname(){
    if(this.user.user.firstname)
      return this.user.user.firstname;
  }

  get lastname(){
    if(this.user.user.lastname)
      return this.user.user.lastname;
  }

  get displayname(){
    if(this.user.user.displayname)
      return this.user.user.displayname;
  }

  get id(){
    if(this.user.user.id)
      return this.user.user.id;
  }

  get username(){
    if(this.user.user.username)
      return this.user.user.username;
  }

  get cookie(){
    if(this.user.cookie)
      return this.user.cookie;
  }

  get all(){
    if(this.user)
      return this.user.user;
  }

  save(){
    return this.storage.set(this.USER_KEY, this.user);
  }

}
