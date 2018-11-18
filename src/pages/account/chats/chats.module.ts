import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountChatsPage } from './chats';

import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    AccountChatsPage
  ],
  imports: [
    IonicPageModule.forChild(AccountChatsPage),
    SharedModule
  ],
})
export class AccountChatsPageModule {}
