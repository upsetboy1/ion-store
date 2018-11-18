import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCategoriesPage } from './modal-categories';
import { SharedModule } from '../../../app/shared.module';

@NgModule({
  declarations: [
    ModalCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCategoriesPage),
    SharedModule
  ],
})
export class ModalCategoriesPageModule {}
