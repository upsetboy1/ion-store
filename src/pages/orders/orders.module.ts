import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersPage } from './orders';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    OrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdersPage),
    SharedModule
  ],
})
export class OrdersPageModule {}
