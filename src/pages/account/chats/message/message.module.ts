import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountChatsMessagePage } from './message';
import { SharedModule } from '../../../../app/shared.module';

@NgModule({
  declarations: [
    AccountChatsMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(AccountChatsMessagePage),
    SharedModule
  ],
})
export class AccountChatsMessagePageModule {}
