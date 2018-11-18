import { SharedModule } from '../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutPage } from './checkout';


@NgModule({
  declarations: [
    CheckoutPage
  ],
  imports: [
    IonicPageModule.forChild(CheckoutPage),
    SharedModule
  ],
})
export class CheckoutPageModule {}
