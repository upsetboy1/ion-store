import { SharedModule } from '../../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderDetailPage } from './detail';

@NgModule({
  declarations: [
    OrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderDetailPage),
    SharedModule
  ],
})
export class OrderDetailPageModule {}
