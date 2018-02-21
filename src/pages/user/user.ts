import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { AuthService } from '../../services/auth.service';

import * as pages from '../pages';
import { DiscountService } from '../../services/discount';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user = [];
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private events: Events,
              private discountService : DiscountService) {
    // let temp = auth.getCurrentUser();
    // this.user = {
    //   name: temp.displayName,
    //   email: temp.email
    // }

    this.pages =[
      { title: 'Dodaj sniženje', component: pages.DiscountAddPage },
      { title: 'Pregled aktivnih sniženja', component: pages.AllActiveDiscountsPage },
      { title: 'Povijest sniženja', component: pages.DiscountHistoryPage },
    ]; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    if(this.user.length == 0){
    console.log(this.discountService.getStoreName().subscribe(
      response => {
        this.user = response;
        console.log(this.user[0]);
      }
    ));
  }
  }

  logout(){
    this.auth.logout();
    this.navCtrl.setRoot(TabsPage);
    this.events.publish('login:changed');
  }

  // updateInformation(){
  //   let temp = this.auth.getCurrentUser();
  //   this.user = {
  //     name: temp.displayName,
  //     email: temp.email
  //   }
  // }

  // changeProfile() {
  //   this.auth.updateCurrentUser('Lidl','').then(
  //     () => {
  //       this.updateInformation();
  //     }
  //   );
  // }

  openPage(page) {
    this.navCtrl.push(page);
  }
}
