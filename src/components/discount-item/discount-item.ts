import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { DiscountService } from '../../services/discount';
import { ToastController,NavController, NavParams } from 'ionic-angular';

import { ArticlePage } from "../../pages/pages";


@Component({
  selector: 'discount-item',
  templateUrl: 'discount-item.html' 
})
export class DiscountItemComponent implements OnInit{

  constructor(private nav: NavController, private navParams: NavParams,private discountService : DiscountService, private toastController : ToastController){

  }
  
  isFavorite : boolean = false;

  @Input() discount: any;

  @Input() page : string;

  @Output() favoriteEvent = new EventEmitter<any>();

  calculateDiscount(oldPrice: number, discount: number) {
    return oldPrice - (oldPrice * (discount / 100))
  }

  ngOnInit(){

  }

  ionViewWillEnter(){
    console.log("Ušlo");
    console.log(this.discount);
  }

  favorites = [];

  starClicked(){
    const toast = this.toastController.create({
      position: "top",
      duration: 1500
    });
    if(this.discountService.isInFavorites(this.discount)){
      this.discountService.removeFromFavorites(this.discount);
      toast.setMessage("Item removed from favorites!");
      this.favorites = this.discountService.getFavorites();
      this.favoriteEvent.emit(this.favorites);
      toast.present();
    }else{
      this.discountService.addToFavorites(this.discount);
      toast.setMessage("Item added to favorites!");
      toast.present();
    }
  }
  
  openArticlePage(discount){
    this.nav.push(ArticlePage, discount);

  }

}


