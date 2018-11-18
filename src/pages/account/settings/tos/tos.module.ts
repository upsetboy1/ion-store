import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSettingsTosPage } from './tos';
import { SharedModule } from '../../../../app/shared.module';

@NgModule({
  declarations: [
    AccountSettingsTosPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSettingsTosPage),
    SharedModule
  ],
})
export class AccountSettingsTosPageModule {}
