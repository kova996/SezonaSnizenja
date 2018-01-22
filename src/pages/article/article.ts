import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  article : any;

  map: any; //just so we can make map placeholder

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.article = this.navParams.data;
    console.log(this.article);

    //just something as a placeholder
    this.map = {
      lat: 51.678418,
      lng: 7.809007,
      zoom: 12,
      markerLabel: 'lokacija'
    }
  }

  calculateDiscount(oldPrice: number, discount: number) {
    return oldPrice - (oldPrice * (discount / 100))
  }

  
}
