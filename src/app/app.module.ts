import { SharedModule } from './shared.module';

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MODULES, PROVIDERS } from './app.imports';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    MODULES,
    SharedModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [ 
    PROVIDERS, 
    // Keep this to enable Ionic's runtime error handling during development
    {provide: ErrorHandler, useClass: IonicErrorHandler} 
  ]
})
export class AppModule {
  
}
