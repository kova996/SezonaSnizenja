import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DiscountService } from '../../services/discount';


@IonicPage()
@Component({
  selector: 'page-register-detail',
  templateUrl: 'register-detail.html',
})
export class RegisterDetailPage {

  constructor( public navParams: NavParams, private authService : AuthService, private discountService : DiscountService) {
    this.email = this.navParams.get("email");
    this.password = this.navParams.get("password");
  }

  email = "";
  password = "";


  onSubmit(form : NgForm){
    let user = {
      storeName : form.value.storeName,
      number : form.value.number,
      linkPicture : form.value.linkPicture,
      email : this.email
    }
    this.authService.registerUser(this.email, this.password).then(
      () => {
        this.discountService.addUser(user);
      }
    );
  }

}
