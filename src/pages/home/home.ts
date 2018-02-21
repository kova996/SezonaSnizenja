
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { DiscountService } from '../../services/discount';
import { ArticlePage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage{

  favorites = [];

  discounts : any[];
  constructor(private discountService : DiscountService,
              private nav : NavController,
              private navParams : NavParams, private load : LoadingController) {
  }


  ionViewWillEnter(){
    let load = this.load.create({content: "Dobavljanje sniženja..."});
    load.present();
    this.discountService.getDiscounts().subscribe(
      response => {
       this.discounts = response;
       load.dismiss();
      }
    );

  }

  openArticlePage(discount){
    this.nav.push(ArticlePage, discount);
  }

}
