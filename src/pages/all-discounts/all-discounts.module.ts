import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllDiscountsPage } from './all-discounts';

@NgModule({
  declarations: [
    AllDiscountsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllDiscountsPage),
  ],
})
export class AllDiscountsPageModule {}
