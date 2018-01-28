import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllActiveDiscountsPage } from './all-active-discounts';

@NgModule({
  declarations: [
    AllActiveDiscountsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllActiveDiscountsPage),
  ],
})
export class AllActiveDiscountsPageModule {}
