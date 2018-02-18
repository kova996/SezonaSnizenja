import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NgForm } from '@angular/forms';
import * as firebase from "firebase";


@IonicPage()
@Component({
  selector: 'page-discount-add',
  templateUrl: 'discount-add.html',
})
export class DiscountAddPage {

  newPrice = 0;
  oldPrice = 0;
  discount = 0;
  imageData = "";
  storage = firebase.storage().ref("pictures/");

  options : CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera : Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscountAddPage');
  }

  onImageTaken(){
    this.camera.getPicture(this.options).then(
      data => {
        this.imageData = data;
        let imageRef = this.storage.child("test.jpg");
        imageRef.putString("data:image/jpeg;base64," + data, "data_url").then(()=> {alert("Uspilo")})
        .catch(err => {alert(err.message)});
      })
    .catch(reason => {alert(reason.message)});
  }

  onSubmit(form : NgForm){

    // const imageRef = this.storage.child("images");
    // var message = '5b6p5Y-344GX44G-44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
    // imageRef.putString(message,'base64url').then(
    //   response => alert("Uspilo"),
    //   err => {console.log("Ovde: " + err)})
    //   .catch(err => alert(err.message));
    // alert("Kraj");
  }

  changeOld(event : any){
    this.oldPrice = +event.target.value;
    this.newPrice = this.oldPrice - this.oldPrice * (this.discount / 100);
  }

  changeDiscount(event: any){
    this.discount = +event.target.value;
    this.newPrice = this.oldPrice - this.oldPrice * (this.discount / 100);
  }

}
