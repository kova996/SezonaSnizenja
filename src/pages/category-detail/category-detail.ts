import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { DiscountService } from '../../services/discount';

@IonicPage()
@Component({
  selector: 'page-category-detail',
  templateUrl: 'category-detail.html',
})
export class CategoryDetailPage {

  constructor( public navParams: NavParams, private discountService : DiscountService) {
    this.name = this.navParams.get("name");
  }
  name : string;
  discounts : any[] = [];

  ionViewWillEnter() {
    console.log(this.name);
    this.discountService.getCategoryDiscounts(this.name).subscribe(response => this.discounts = response);
  }

}
