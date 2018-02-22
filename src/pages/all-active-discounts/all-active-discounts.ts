import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiscountService } from '../../services/discount';



@IonicPage()
@Component({
  selector: 'page-all-active-discounts',
  templateUrl: 'all-active-discounts.html',
})
export class AllActiveDiscountsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private discountService : DiscountService) {
  }

  discounts = [];

  ionViewWillEnter(){
    let name = this.navParams.get("name");
    this.discountService.getCatalogDiscounts(name)
    .subscribe(
      response => {this.discounts = response
      console.log(this.discounts)}
    )
  }

  onDelete(discount : any){
    this.discountService.removeDiscount(discount.id);
  }

}
