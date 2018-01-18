
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { DiscountService } from '../../services/discount';
import { ArticlePage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  discounts : any[];
  constructor(private discountService : DiscountService,
              private nav : NavController,
              private navParams : NavParams) {
  }

  ionViewWillEnter(){
    this.discounts = this.discountService.getDiscounts();
    console.log(this.discounts);
  }
  openArticlePage(discount){
    this.nav.push(ArticlePage, discount);
  }

}
