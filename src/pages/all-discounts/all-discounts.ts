import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiscountService } from '../../services/discount';



@IonicPage()
@Component({
  selector: 'page-all-discounts',
  templateUrl: 'all-discounts.html',
})
export class AllDiscountsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private discountService : DiscountService) {
  }

  ionViewWillEnter(){
    console.log("Ušlo");
    this.discountService.getDiscounts().subscribe(
      response => {this.discounts = response
      console.log(this.discounts);}
    )
  }

  discounts;

}
