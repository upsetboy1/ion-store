import { MiniCartPage } from './mini-cart';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    MiniCartPage,
  ],
  imports: [
    IonicPageModule.forChild(MiniCartPage),
    SharedModule
  ],
  exports: [
    MiniCartPage
  ]
})

export class MiniCartPageModule { }