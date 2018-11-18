import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThanksPage } from './thanks';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    ThanksPage,
  ],
  imports: [
    IonicPageModule.forChild(ThanksPage),
    SharedModule
  ],
})
export class ThanksPageModule {}
