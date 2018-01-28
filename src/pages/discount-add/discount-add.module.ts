import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscountAddPage } from './discount-add';

@NgModule({
  declarations: [
    DiscountAddPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscountAddPage),
  ],
})
export class DiscountAddPageModule {}
