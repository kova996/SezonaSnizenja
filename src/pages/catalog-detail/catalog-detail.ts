import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiscountService } from '../../services/discount';



@IonicPage()
@Component({
  selector: 'page-catalog-detail',
  templateUrl: 'catalog-detail.html',
})
export class CatalogDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private discountService : DiscountService) {
    this.store = this.navParams.data;
    console.log(this.store.storeName);
    this.discountService.getCatalogDiscounts(this.store.storeName)
    .subscribe(
      response => this.discounts = response
    )
  }

  store;
  discounts;



}
