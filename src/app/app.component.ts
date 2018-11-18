
import { Component } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { TranslateService } from '@ngx-translate/core';
import { Platform /*,Config*/ } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WooCommerceProvider, NotifProvider, SettingsProvider } from '../providers/providers';
import { App } from './app.global';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = 'TabsPage';
  app: any = {};

  constructor(private oneSignal: OneSignal, private notif: NotifProvider, private platform: Platform, /*private config: Config,*/ public settings: SettingsProvider, private translate: TranslateService, private woo: WooCommerceProvider, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.settings.load().then((x) => {
      this.woo.loadZones();
      this.app = x;
      this.initTranslate();
    });

    platform.ready().then(() => {
      if (platform.is('cordova')) {
        this.oneSignal.startInit(App.OneSignalAppID, App.GCM);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        
        this.oneSignal.handleNotificationReceived().subscribe((x) => {
        // do something when notification is received
          console.log(x);
          this.notif.post(x.payload);
        });
        
        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });
        
        this.oneSignal.endInit();
      }
    });
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.statusBar.overlaysWebView(false);
      // this.statusBar.backgroundColorByHexString('#FF1654');
      this.splashScreen.hide();
    });
  }

  ionViewCanEnter(){
    
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang(this.app && this.app.language !== undefined ? this.app.language : App.defaultLang);

    if(this.app && this.app.language !== undefined)
      this.translate.use(this.app.language);
    else
      this.translate.use(App.defaultLang);
      
    // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
    //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    // });
  }

}
