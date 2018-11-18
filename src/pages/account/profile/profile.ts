import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider, LoadingProvider, ToastProvider } from '../../../providers/providers';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-account-profile',
  templateUrl: 'profile.html',
})
export class AccountProfilePage {
  private form : FormGroup;
  user: any;

  constructor(public view: ViewController, private translate: TranslateService, private loader: LoadingProvider, private toast: ToastProvider, private _user: UserProvider, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.user = this._user.all;

    this.form = this.fb.group({
      first: [this.user.firstname, Validators.required ],
      last: this.user.lastname,
      bio: this.user.description
    });
  }

  submit(){
    this.loader.present();
    this._user.update(this.form.value).map(x => x.json()).subscribe( x => {
      this._user.setUserUpdate(this.form.value);
      this.translate.get(['PROFILE_UPDATED']).subscribe( x=> {
        this.toast.show(x.PROFILE_UPDATED);
      });
      this.loader.dismiss();
      this.dismiss();
    })
  }

  dismiss() {
		this.view.dismiss();
	}

}
