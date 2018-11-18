// Ionic native providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { PayPal } from '@ionic-native/paypal';
import { Stripe } from '@ionic-native/stripe';
import { EmailComposer } from '@ionic-native/email-composer';
import { OneSignal } from '@ionic-native/onesignal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AppRate } from '@ionic-native/app-rate';
import { AppVersion } from '@ionic-native/app-version';

// Modules
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicImageViewerModule } from 'ionic-img-viewer';

// Directives
import { ParallaxHeader } from '../directives/parallax-header/parallax-header';

// Components
import { IonRating, FaIconComponent } from '../components/components';

// Pipes
import { MomentPipe, DiscountPipe, MoneyPipe } from '../pipes/pipes';

// Providers
import { UserProvider, ToastProvider, SettingsProvider, LoadingProvider, NotifProvider, AddressProvider, OrderProvider, WooCommerceProvider, CartProvider, WishlistProvider, HistoryProvider } from '../providers/providers';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/languages/', '.json');
}

export const MODULES = [
  HttpModule,
  BrowserModule,
  IonicImageViewerModule,
  // database name for cart, wish, checkout, etc
  IonicStorageModule.forRoot({
    name: '_ionstore',
       driverOrder: ['indexeddb', 'sqlite', 'websql']
  }),
  TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
    }
  })
];

export const PIPES = [
  MomentPipe,
  DiscountPipe,
  MoneyPipe
];

export const PROVIDERS = [
  //AppState,
  UserProvider,
  OrderProvider,
  AddressProvider,
  WooCommerceProvider,
  SettingsProvider,
  WishlistProvider,
  CartProvider,
  HistoryProvider,
  LoadingProvider,
  NotifProvider,
  ToastProvider,

    // Ionic native specific providers
  IonicStorageModule,
  StatusBar,
  SplashScreen,
  PayPal,
  Stripe,
  OneSignal,
  SocialSharing,
  AppRate,
  AppVersion,
  EmailComposer
];

export const COMPONENTS = [
  IonRating,
  FaIconComponent
];

export const DIRECTIVES = [
    ParallaxHeader
];