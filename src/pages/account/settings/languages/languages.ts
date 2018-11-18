import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { App } from '../../../../app/app.global';
import { SettingsProvider, ToastProvider } from '../../../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-account-settings-languages',
  templateUrl: 'languages.html',
})
export class AccountSettingsLanguagesPage {
  private form : FormGroup;

  languages: any[] = App.languages;
  
  constructor(public navCtrl: NavController, private settings: SettingsProvider, private toast: ToastProvider, private fb: FormBuilder, public navParams: NavParams, private translate: TranslateService) {    
    this.form = this.fb.group({
      lang: [this.settings.all.language || this.translate.currentLang, Validators.required ]
    });
  }

  doSubmit() {
    this.settings.setSettings(this.form.value.lang, 'language');
    this.translate.use(this.form.value.lang);

    this.translate.get('LANGUAGE_SAVED').subscribe( x=> {
      this.toast.show(x);
    });
  }

}
