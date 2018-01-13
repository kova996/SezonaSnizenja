export class DiscountService {

  private discounts: any[] = [{
      name: "Polo Majica - Crivit",
      oldPrice: 200,
      discount: 50,
      newPrice: 100,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "https://www.rost-sport.hr/EasyEdit/UserFiles/CatalogImages/polo-majica-tommy-hilfiger/polo-majica-th-royal-blue-veluni-hilfiger-636040161814238005_670_670.jpeg",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018"
    },
    {
      name: "Polo Majica - Crivit",
      oldPrice: 200,
      discount: 30,
      newPrice: 100,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "https://www.rost-sport.hr/EasyEdit/UserFiles/CatalogImages/polo-majica-tommy-hilfiger/polo-majica-th-royal-blue-veluni-hilfiger-636040161814238005_670_670.jpeg",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018"
    },
    {
      name: "Polo Majica - Crivit",
      oldPrice: 200,
      discount: 20,
      newPrice: 100,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "https://www.rost-sport.hr/EasyEdit/UserFiles/CatalogImages/polo-majica-tommy-hilfiger/polo-majica-th-royal-blue-veluni-hilfiger-636040161814238005_670_670.jpeg",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018"
    },
    {
      name: "Polo Majica - Crivit",
      oldPrice: 200,
      discount: 10,
      newPrice: 100,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "https://www.rost-sport.hr/EasyEdit/UserFiles/CatalogImages/polo-majica-tommy-hilfiger/polo-majica-th-royal-blue-veluni-hilfiger-636040161814238005_670_670.jpeg",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018"
    },
    {
      name: "Polo Majica - Crivit",
      oldPrice: 200,
      discount: 70,
      newPrice: 100,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "https://www.rost-sport.hr/EasyEdit/UserFiles/CatalogImages/polo-majica-tommy-hilfiger/polo-majica-th-royal-blue-veluni-hilfiger-636040161814238005_670_670.jpeg",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018"
    },
    {
      name: "Polo Majica - Crivit",
      oldPrice: 200,
      discount: 80,
      newPrice: 100,
      info: "Crna - Crvena - Siva\nS,M,L,Xl",
      picture: "https://www.rost-sport.hr/EasyEdit/UserFiles/CatalogImages/polo-majica-tommy-hilfiger/polo-majica-th-royal-blue-veluni-hilfiger-636040161814238005_670_670.jpeg",
      discountStart: "11.01.2018",
      discountEnd: "12.01.2018"
    }
  ];


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

}
