import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';


import { RegisterDetailPage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // onSubmit(form: NgForm){
  //   this.auth.registerUser(form.value.username, form.value.password);
  // }

  pushDetails(form: NgForm){
    this.navCtrl.push(RegisterDetailPage,{email:form.value.email, password : form.value.password })
  }

}
