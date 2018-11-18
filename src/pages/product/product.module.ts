import { SharedModule } from '../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductPage } from './product';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    ProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductPage),
    SharedModule,
    IonicImageViewerModule
  ],
})
export class ProductPageModule {}
