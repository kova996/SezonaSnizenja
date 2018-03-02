import { Observable } from 'rxjs/Observable';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { DiscountService } from '../../services/discount';
import { ArticlePage } from '../pages';

import { CacheService } from 'ionic-cache';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage{

  favorites = [];

  discounts : Observable<any>;
  constructor(private discountService : DiscountService,
              private nav : NavController,
              private navParams : NavParams,
              private cache: CacheService) {
  }


  ionViewWillEnter(){

    let data = this.discountService.getDiscounts();

    this.discounts = this.cache.loadFromObservable("data",data);

  }

  openArticlePage(discount){
    this.nav.push(ArticlePage, discount);
  }

}
