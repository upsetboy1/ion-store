import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedAddressPage } from './saved-address';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    SavedAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedAddressPage),
    SharedModule
  ],
})
export class SavedAddressPageModule {}
