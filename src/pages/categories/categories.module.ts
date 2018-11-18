import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesPage } from './categories';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    CategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriesPage),
    SharedModule
  ],
})
export class CategoriesPageModule {}
