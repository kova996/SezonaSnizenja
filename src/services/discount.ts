
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/Observable/of";
import { AuthService } from "./auth.service";

@Injectable()
export class DiscountService {

  constructor(private db : AngularFireDatabase, private authService : AuthService){
  }

  storeName = "";


  private discounts : any[] = [];
  // private discounts: any[] = [{
  //     name: "Polo Majica - Crivit",
  //     store : "New Yorker",
  //     oldPrice: 200,
  //     discount: 50,
  //     newPrice: 100,
  //     info: "Crna - Crvena - Siva\nS,M,L,Xl",
  //     picture: "https://www.rost-sport.hr/EasyEdit/UserFiles/CatalogImages/polo-majica-tommy-hilfiger/polo-majica-th-royal-blue-veluni-hilfiger-636040161814238005_670_670.jpeg",
  //     discountStart: "11.01.2018",
  //     discountEnd: "12.01.2018",
  //     id : 1
  //   },
  //   {
  //     name: "Kruške 1kg",
  //     store: "Lidl",
  //     oldPrice: 283,
  //     discount: 30,
  //     newPrice: 234,
  //     info: "Crna - Crvena - Siva\nS,M,L,Xl",
  //     picture: "http://narodnilijek.com/web/wp-content/uploads/kru%C5%A1ke-mr%C5%A1avljenje.jpg",
  //     discountStart: "11.01.2018",
  //     discountEnd: "12.01.2018",
  //     id : 2
  //   },
  //   {
  //     name: "Trokrilni ormar",
  //     store: "Konzum",
  //     oldPrice: 943,
  //     discount: 20,
  //     newPrice: 735,
  //     info: "Crna - Crvena - Siva\nS,M,L,Xl",
  //     picture: "https://cdn1.jysk.com/getimage/wd2.large/38055",
  //     discountStart: "11.01.2018",
  //     discountEnd: "12.01.2018",
  //     id : 3
  //   },
  //   {
  //     name: "Tulipan",
  //     oldPrice: '102',
  //     discount: 10,
  //     newPrice: 96,
  //     info: "Crna - Crvena - Siva\nS,M,L,Xl",
  //     picture: "https://www.jabuka.tv/wp-content/uploads/2016/10/tulipan.jpg",
  //     discountStart: "11.01.2018",
  //     discountEnd: "12.01.2018",
  //     id : 4
  //   },
  //   {
  //     name: "Grah 1kg",
  //     oldPrice: 243,
  //     discount: 70,
  //     newPrice: 89,
  //     info: "Crna - Crvena - Siva\nS,M,L,Xl",
  //     picture: "http://www.gastronomika.hr/wordpress/wp-content/uploads/dreamstime_grah.jpg",
  //     discountStart: "11.01.2018",
  //     discountEnd: "12.01.2018",
  //     id : 5
  //   },
  //   {
  //     name: "Griotte",
  //     oldPrice: 453,
  //     discount: 80,
  //     newPrice: 65,
  //     info: "Crna - Crvena - Siva\nS,M,L,Xl",
  //     picture: "http://www.kras.hr/datastore/filestore/40/Griotte-358g_big_118.png",
  //     discountStart: "11.01.2018",
  //     discountEnd: "12.01.2018",
  //     id : 6
  //   }
  // ];

  favorites : any[] = [];

  addDiscount(discount: any) {
    this.discounts.push(discount);
    this.db.list<any>("discounts/").push(discount);
  }

  getDiscounts(){
    //discounts = nesto sa servera uz pomoc firebasea
    let discounts = [];
   
   
    return this.db.list<any>("discounts/").valueChanges()
    .do((response)=> {
      if(response){
        return response;
      }else{
        return [];
      }
    })

  }



  getCategoryDiscounts(filter : any){
    console.log(filter);
  return this.db.list<any>("discounts/",ref => ref.orderByChild("category").equalTo(filter)).valueChanges()
    .do(response => {
      if(response){
        return response;
      }else{return []};
    });  
  }

  removeDiscount(id: number) {
   this.db.list<any>("discounts/",ref => ref.orderByChild("id").equalTo(id)).snapshotChanges()
   .map(actions => {
    return actions.map(action => ({ key: action.key, ...action.payload.val() }));
  }).take(1).subscribe(items => {
    console.log("Evo ga");
    let item = items.map(item => item.key);
    console.log(item);
    console.log(item[0]);
    this.db.list<any>("discounts/").remove(item[0]);
  });
    //dodaj discounte na server sa firebasom
  }

  calculateDiscount(oldPrice: number, discount: number) {
    return oldPrice - (oldPrice * (discount / 100))
  }

  addToFavorites(discount : any){
    this.favorites.push(discount);
    console.log(this.favorites);

    localStorage.setItem(discount.id, JSON.stringify(discount));
    console.log(localStorage.getItem(discount.id));
  }

  saveFavorites(favorites){
    this.favorites = favorites;
  }

  getFavorites(){
    let items = [];

    let keys = Object.keys(localStorage);

    for(let key of keys){
      if(key.charAt(0)>='0' && key.charAt(0)<='9')
        items.push(JSON.parse(localStorage.getItem(key)));
    }
    console.log(items);
    return items.slice();
    
    //TODO - dohvati iz baze

  }

  loadFavorites(){
    this.favorites =  JSON.parse(localStorage.getItem("favorites"));
    // alert(this.favorites);
  }

  removeFromFavorites(discount : any){
    let index = this.favorites.map((o) => { return o.id; }).indexOf(discount.id);
    console.log(index);
    this.favorites.splice(index, 1);
    console.log(this.favorites);

    localStorage.removeItem(discount.id);
    //localStorage.setItem("favorites",JSON.stringify(this.favorites));
    //TODO - spremi nove favorite u bazu
    //alert(localStorage.getItem("favorites"));
  }

  isFavorite(discountId){
    return localStorage.getItem(discountId) ? true : false;
  }

  isInFavorites(discount : any){
        return this.favorites.find(item => {return item.id === discount.id});
  }

  getStores(){
    return this.db.list<any>("users").valueChanges().do(
      response => {
        if(response){
          return response;
        }else{
          return [];
        }
      }
    )
  }

  getCatalogDiscounts(filter : any){
    console.log(filter);
  return this.db.list<any>("discounts/",ref => ref.orderByChild("storeName").equalTo(filter)).valueChanges()
    .do(response => {
      if(response){
        return response;
      }else{return []};
    });  
  }

  getStoreName(){
    return this.db.list<any>("users/"+this.authService.getCurrentUser().uid).valueChanges();
  }
  addUser(user){
    this.db.list<any>("users/"+this.authService.getCurrentUser().uid).push(user);
  }
}
