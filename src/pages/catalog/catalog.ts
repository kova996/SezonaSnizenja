import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiscountService } from '../../services/discount';
import { CatalogDetailPage } from '../catalog-detail/catalog-detail';



@IonicPage()
@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html',
})
export class CatalogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private discountService : DiscountService) {
  }

  stores = [];

 ionViewWillEnter(){
   this.discountService.getStores().subscribe(
     response => {
       let keys = [];
       for(let i = 0; i < response.length; i++){
         keys.push(Object.keys(response[i])[0]);
       }
       for(let i = 0; i < response.length; i++){
         let key = keys[i];
         console.log(key);
         let store = response[i][key];
         if(this.stores.map((item)=>{return item.storeName}).indexOf(store.storeName) == -1){
         this.stores.push(response[i][key])
         }
      }
      console.log(this.stores);
     }
   )
 }

 openCatalogDetail(store){
   this.navCtrl.push(CatalogDetailPage, store)
 }

}
