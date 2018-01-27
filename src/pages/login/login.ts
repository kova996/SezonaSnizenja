import { Component , OnInit, HostBinding } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import {RegisterPage, UserPage} from './../pages';

import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSubmit(form: NgForm){
    this.auth.loginUserAsync(form.value.username, form.value.password)
      .then(()=> {
        this.navCtrl.setRoot(UserPage)
      }, err => console.log(err));
  }

  registration(){
    this.navCtrl.push(RegisterPage);
  }

}
 