import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation, GeolocationOptions, Geoposition} from "@ionic-native/geolocation";
import { LocationService } from '../../services/location';

declare var google;

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  article : any;

  map: any; 

  options : GeolocationOptions;

  currentPos : Geoposition;

  place : any;

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private geolocation : Geolocation, private location : LocationService) {
  }

  ionViewDidLoad() {

    this.article = this.navParams.data;
    console.log(this.article);

    this.options = {
      enableHighAccuracy: true
    }

    this.geolocation.getCurrentPosition(this.options).then(
      (position : Geoposition)=> {
         this.currentPos = position;
        console.log(position.coords.latitude, position.coords.longitude)
        this.addMap(position.coords.latitude, position.coords.longitude);})
    .catch(
      error => {alert(error)}
    );
  }

  calculateDiscount(oldPrice: number, discount: number) {
    return oldPrice - (oldPrice * (discount / 100))
  }

  addMap(lat, lon){
    let latLong = new google.maps.LatLng(lat, lon);

    let dist;

    let dur;

    let minimum = 100;

    let closest;

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});

    let mapOptions = {
      center : latLong,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    directionsDisplay.setMap(this.map);

    this.location.findLocation(lat + ","+lon, this.article.storeName)
      .subscribe((response : any) => {
        this.place = response.results;
        console.log(this.place);
        for(let i = 0; i< this.place.length; i++){
          this.location.findDistances(lat + "," + lon, this.place[i].geometry.location)
          .subscribe(
            response => {
              dur = response.rows[0].elements[0].duration.text;
              dist = response.rows[0].elements[0].distance.text;
              this.createMarker(this.place[i], dur, dist);
              if(+dist.split(" ")[0].replace(',','.') < minimum){
                minimum = +dist.split(" ")[0].replace(',','.');
                closest = this.place[i];
              }
              if(i === this.place.length - 1){
                console.log(closest.vicinity);
                directionsService.route({
                  origin: lat + "," + lon,
                  destination: closest.geometry.location.lat + ","+closest.geometry.location.lng,
                  optimizeWaypoints: true,
                  travelMode: 'DRIVING'
                }, (response, status) =>{
                  if (status === 'OK') {
                    console.log(response.routes);
                    directionsDisplay.setDirections(response);
                    
                  } else {
                    window.alert('Directions request failed due to ' + status);
                  }
                });
              }});
        }
      });

     this.addMarker();
  }

  createMarker(place, dur, dist){

    let marker = new google.maps.Marker({
      map : this.map,
      position : place.geometry.location,
      icon: "assets/imgs/purple_MarkerD.png"
    });

    let content = "<h6>" +place.name + "</h6>" + place.vicinity +"<br><b>Distance: </b>" + dist + "<br><b>Duration: </b>" + dur;  
    let infoWindow = new google.maps.InfoWindow({
      content: content,

      });
      
      google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      });
  }

  addMarker(){
    let marker = new google.maps.Marker({
      map : this.map,
      position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";  
    let infoWindow = new google.maps.InfoWindow({
      content: content
      });
      
      google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      });
  }

}
