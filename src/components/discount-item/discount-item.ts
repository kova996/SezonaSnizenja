import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { DiscountService } from '../../services/discount';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'discount-item',
  templateUrl: 'discount-item.html' 
})
export class DiscountItemComponent implements OnInit{

  @Input() discount: any;

  @Input() page : string;

  @Output() favoriteEvent = new EventEmitter<any>();

  calculateDiscount(oldPrice: number, discount: number) {
    return oldPrice - (oldPrice * (discount / 100))
  }

  isFavorite : boolean = false;

  ngOnInit(){

  }

  ionViewWillEnter(){
    console.log("Ušlo");
  }

  constructor(private discountService : DiscountService, private toastController : ToastController){

  }

  starClicked(){
    const toast = this.toastController.create({
      position: "top",
      duration: 1500
    });
    if(this.discountService.isInFavorites(this.discount)){
      this.discountService.removeFromFavorites(this.discount);
      toast.setMessage("Item removed from favorites!");
      this.favoriteEvent.emit(this.discountService.getFavorites());
      toast.present();
    }else{
      this.discountService.addToFavorites(this.discount);
      toast.setMessage("Item added to favorites!");
      toast.present();
    }
  }

}


