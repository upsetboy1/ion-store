import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSettingsPage } from './settings';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    AccountSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSettingsPage),
    SharedModule
  ],
})
export class AccountSettingsPageModule {}
