import { SharedModule } from '../../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductGridPage } from './grid';

@NgModule({
  declarations: [
    ProductGridPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductGridPage),
    SharedModule
  ],
})
export class ProductGridPageModule {}
