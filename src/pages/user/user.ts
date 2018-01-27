import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { AuthService } from '../../services/auth.service';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  logout(){
    this.auth.logout();
    this.navCtrl.setRoot(TabsPage);
  }

}
