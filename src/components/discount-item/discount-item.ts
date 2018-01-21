import { Component, Input } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";

import { ArticlePage } from "../../pages/pages";

@Component({
  selector: 'discount-item',
  templateUrl: 'discount-item.html' 
})
export class DiscountItemComponent {

  constructor(private nav: NavController, private navParams: NavParams){

  }

  @Input() discount: any;

  calculateDiscount(oldPrice: number, discount: number) {
    return oldPrice - (oldPrice * (discount / 100))
  }

  openArticlePage(discount){
    this.nav.push(ArticlePage, discount);
  }

}


