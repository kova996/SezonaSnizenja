import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscountHistoryPage } from './discount-history';

@NgModule({
  declarations: [
    DiscountHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscountHistoryPage),
  ],
})
export class DiscountHistoryPageModule {}
