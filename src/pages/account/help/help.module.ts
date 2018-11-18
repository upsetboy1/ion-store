import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountHelpPage } from './help';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    AccountHelpPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountHelpPage),
    SharedModule
  ],
})
export class AccountHelpPageModule {}
