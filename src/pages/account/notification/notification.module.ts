import { SharedModule } from '../../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountNotificationPage } from './notification';

@NgModule({
  declarations: [
    AccountNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountNotificationPage),
    SharedModule
  ],
})
export class AccountNotificationPageModule {}
