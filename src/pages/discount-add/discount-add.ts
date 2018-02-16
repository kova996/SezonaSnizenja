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
  storage = firebase.storage().ref();

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
    this.camera.getPicture(this.options).then(data => {this.imageData = data;})
    .catch(reason => {alert(reason)});
  }

  onSubmit(form : NgForm){
    alert("Ušlo");
    let filename = "test";
    const imageRef = this.storage.child("images");
    imageRef.putString(this.imageData,firebase.storage.StringFormat.DATA_URL).then(
      response => alert(response),
      err => {console.log("Ovde: " + err)})
      .catch(err => alert(err));
    alert("Kraj");
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
