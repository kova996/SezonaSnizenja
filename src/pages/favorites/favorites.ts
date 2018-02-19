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

  favorites;

  ionViewWillEnter(){
    this.discountService.getFavorites().then(
      response => this.favorites = response
    );
    console.log(this.favorites);
  }

  onFavoriteEvent(favorites : any){
    console.log("Ušlo");
    this.favorites = favorites;
  }

}
