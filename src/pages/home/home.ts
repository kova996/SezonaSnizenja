
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { DiscountService } from '../../services/discount';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  discounts : any[];
  constructor(private discountService : DiscountService) {
  }

  ionViewWillEnter(){
    this.discounts = this.discountService.getDiscounts();
    console.log(this.discounts);
  }

 

}
