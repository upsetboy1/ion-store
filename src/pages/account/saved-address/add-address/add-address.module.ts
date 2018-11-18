import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAddressPage } from './add-address';
import { SharedModule } from '../../../../app/shared.module';

@NgModule({
  declarations: [
    AddAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAddressPage),
    SharedModule
  ],
})
export class AddAddressPageModule {}
