import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { CategoryDetailPage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(private navController : NavController) {
  }

 categories : any = [
   {link : "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
   name : "Za Dom"},
   {link: "https://images.pexels.com/photos/59599/pexels-photo-59599.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  name : "Za Vrt"},
   {link: "https://images.pexels.com/photos/573315/pexels-photo-573315.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  name:"Obuća"},
   {link: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  name : "Odjeća"},
   {link: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  name:"Tehnologija"},
   {link: "https://images.pexels.com/photos/273822/pexels-photo-273822.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  name:"Kuhinja"},
   {link: "https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  name:"Bijela Tehnika"},
   {link : "https://images.pexels.com/photos/164854/pexels-photo-164854.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
   name:"Za Djecu"
 }];

 openCategoryDetail(name : any){
   console.log(name);
   this.navController.push(CategoryDetailPage, {name : name});
 }

}
