import { Component , OnInit, HostBinding } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Events } from 'ionic-angular';

import {RegisterPage, UserPage} from './../pages';

import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService,private events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSubmit(form: NgForm){
    this.auth.loginUserAsync(form.value.username, form.value.password)
      .then((res)=> {
        this.navCtrl.setRoot(UserPage)
        console.log(res);
        
        if(this.auth.getCurrentUser!=null)
          this.auth.getCurrentUser().getIdToken()
            .then(
                (token:string) => {
                  this.auth.token = token
                  this.events.publish('login:changed');
                }
            );
      }, err => console.log(err));
  }

  registration(){
    this.navCtrl.push(RegisterPage);
  }

}
 