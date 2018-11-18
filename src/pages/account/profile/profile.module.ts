import { SharedModule } from '../../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountProfilePage } from './profile';

@NgModule({
  declarations: [
    AccountProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(AccountProfilePage),
    SharedModule
  ],
})
export class AccountProfilePageModule {}
