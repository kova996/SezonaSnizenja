import { Component, Input } from '@angular/core';

@Component({
  selector: 'discount-item',
  templateUrl: 'discount-item.html' 
})
export class DiscountItemComponent {

  @Input() discount: any;

  calculateDiscount(oldPrice: number, discount: number) {
    return oldPrice - (oldPrice * (discount / 100))
  }

}


