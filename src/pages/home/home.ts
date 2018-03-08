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
    this.loadData();
  }

  openArticlePage(discount){
    this.nav.push(ArticlePage, discount);
  }

  loadData(refresher?){
    let data = this.discountService.getDiscounts();

    if(refresher){
      let delayType='all';
      this.discounts = this.cache.loadFromDelayedObservable('data', data, 'Discounts', 60 * 60 * 24 , delayType);

      this.discounts.subscribe( data => {
        refresher.complete();
      });
    }
    else{
      this.discounts = this.cache.loadFromObservable("data",data,'Discounts',60 * 60 * 24,);
    }
  }
}
