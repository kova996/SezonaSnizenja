import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor() {
  }

 pictures : any = {
   home : "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
   garden: "https://images.pexels.com/photos/59599/pexels-photo-59599.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
   shoes: "https://images.pexels.com/photos/573315/pexels-photo-573315.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
   clothes: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
   tech: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
   kitchen: "https://images.pexels.com/photos/273822/pexels-photo-273822.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
   household: "https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
   kids : "https://images.pexels.com/photos/164854/pexels-photo-164854.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
 }

}
