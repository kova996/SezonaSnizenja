
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
    this.discountService.getDiscounts().subscribe(
      response => {
       this.discounts = response;
       alert(this.discounts[1].name);
      }
    );
  }
  openArticlePage(discount){
    this.nav.push(ArticlePage, discount);
  }

}
