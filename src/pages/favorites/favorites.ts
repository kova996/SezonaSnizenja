import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { DiscountService } from '../../services/discount';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  constructor(private discountService : DiscountService) {
  }

  favorites : any[] = [];

  ionViewWillEnter(){
    this.favorites = this.discountService.getFavorites();
    console.log(this.favorites);
  }

  onFavoriteEvent(favorites : any){
    console.log("Ušlo");
    this.favorites = favorites;
  }

}
