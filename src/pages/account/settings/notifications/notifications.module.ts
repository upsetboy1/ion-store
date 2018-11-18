import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSettingsNotificationsPage } from './notifications';

@NgModule({
  declarations: [
    AccountSettingsNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSettingsNotificationsPage),
  ],
})
export class AccountSettingsNotificationsPageModule {}
