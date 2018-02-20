import {
  Component
} from '@angular/core';
import {
  IonicPage, LoadingController, AlertController, NavController
} from 'ionic-angular';
import {
  Camera,
  CameraOptions
} from '@ionic-native/camera';
import {
  NgForm
} from '@angular/forms';
import * as firebase from "firebase";
import { DiscountService } from '../../services/discount';

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
  categories = ["Za Dom", "Za Vrt", "Obuća", "Odjeća", "Tehnologija", "Kuhinja", "Bijela Tehnika", "Za Djecu", "Ostalo"];
  storage = firebase.storage().ref("pictures/");
  imageHTML = "data:image/jpeg;base64,";

  options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera, private discountService : DiscountService,
              private loadCtrl : LoadingController, private alertCtrl : AlertController,
              private navCtrl : NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscountAddPage');
  }

  onImageTaken() {
    this.camera.getPicture(this.options).then(
        data => {
          this.imageData = data;
          this.imageHTML += data;
        })
      .catch(reason => {
        alert(reason.message)
      });
  }

  onSubmit(form: NgForm) {
    let load = this.loadCtrl.create({content:"Molimo Vas pričekajte..."});
    load.present();
    console.log(form);
    let discount = {
      oldPrice : +form.value.oldPrice,
      discount : +form.value.discount,
      newPrice : this.newPrice,
      name : form.value.name,
      info : form.value.info,
      discountStart : form.value.discountStart,
      discountEnd : form.value.discountEnd,
      category : form.value.category
    };
    console.log(discount);
    let customId = (Date.now() / 1000).toFixed(0);
    let imageRef = this.storage.child(discount.name + "-" + (customId) + ".jpg");
    imageRef.putString("data:image/jpeg;base64," + this.imageData, "data_url").then((response) => {
        discount["picture"] = response.downloadURL;
        this.discountService.addDiscount(discount);
        load.dismiss();
        let alertDa = this.alertCtrl.create({message: "Artikal je dodan!", buttons:["OK"]});
        alertDa.present();
        alertDa.onDidDismiss(
          ()=>{
            this.navCtrl.pop();
          }
        )
      })
      .catch(err => {
        load.dismiss();
        alert(err.message);
      });
  }

  changeOld(event: any) {
    this.oldPrice = +event.target.value;
    this.newPrice = this.oldPrice - this.oldPrice * (this.discount / 100);
    if(this.newPrice < 0){this.newPrice = 0;}
  }

  changeDiscount(event: any) {
    this.discount = +event.target.value;
    this.newPrice = this.oldPrice - this.oldPrice * (this.discount / 100);
    if(this.newPrice < 0){this.newPrice = 0;}
  }

}