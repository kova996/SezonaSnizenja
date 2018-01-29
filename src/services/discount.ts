export class DiscountService {

  private discounts: any[] = [{
      name: "Polo Majica - Crivit",
      store : "New Yorker",
      oldPrice: 200,
      discount: 50,
      newPrice: 100,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "https://www.rost-sport.hr/EasyEdit/UserFiles/CatalogImages/polo-majica-tommy-hilfiger/polo-majica-th-royal-blue-veluni-hilfiger-636040161814238005_670_670.jpeg",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018",
      id : 1
    },
    {
      name: "Kruške 1kg",
      store: "Lidl",
      oldPrice: 283,
      discount: 30,
      newPrice: 234,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "http://narodnilijek.com/web/wp-content/uploads/kru%C5%A1ke-mr%C5%A1avljenje.jpg",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018",
      id : 2
    },
    {
      name: "Trokrilni ormar",
      store: "Konzum",
      oldPrice: 943,
      discount: 20,
      newPrice: 735,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "https://cdn1.jysk.com/getimage/wd2.large/38055",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018",
      id : 3
    },
    {
      name: "Tulipan",
      oldPrice: '102',
      discount: 10,
      newPrice: 96,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "https://www.jabuka.tv/wp-content/uploads/2016/10/tulipan.jpg",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018",
      id : 4
    },
    {
      name: "Grah 1kg",
      oldPrice: 243,
      discount: 70,
      newPrice: 89,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "http://www.gastronomika.hr/wordpress/wp-content/uploads/dreamstime_grah.jpg",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018",
      id : 5
    },
    {
      name: "Griotte",
      oldPrice: 453,
      discount: 80,
      newPrice: 65,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "http://www.kras.hr/datastore/filestore/40/Griotte-358g_big_118.png",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018",
      id : 6
    }
  ];

  favorites : any[] = [];


  addDiscount(discount: any) {
    this.discounts.push(discount);
    //dodaj discounte na server sa firebasom
  }

  getDiscounts() {
    //discounts = nesto sa servera uz pomoc firebasea
    return this.discounts.slice()
  }

  removeDiscounts(index: number) {
    this.discounts = this.discounts.splice(index, 1);
    //dodaj discounte na server sa firebasom
  }

  calculateDiscount(oldPrice: number, discount: number) {
    return oldPrice - (oldPrice * (discount / 100))
  }

  addToFavorites(discount : any){
    this.favorites.push(discount);
    console.log(this.favorites);
    //TODO - spremi u bazu
  }

  getFavorites(){
    return this.favorites.slice();
    //TODO - dohvati iz baze
  }

  removeFromFavorites(discount : any){
    let index = this.favorites.map((o) => { return o.id; }).indexOf(discount.id);
    console.log(index);
    this.favorites.splice(index, 1);
    //TODO - spremi nove favorite u bazu
  }

  isInFavorites(discount : any){
    return this.favorites.find(item => {return item.id === discount.id});
  }

}
