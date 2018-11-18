import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSettingsLanguagesPage } from './languages';
import { SharedModule } from '../../../../app/shared.module';

@NgModule({
  declarations: [
    AccountSettingsLanguagesPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSettingsLanguagesPage),
    SharedModule
  ],
})
export class AccountSettingsLanguagesPageModule {}
