import { HomePage } from './../pages/home/home';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as pages from './../pages/pages';
import { TabsPage } from '../pages/tabs/tabs';

import { AgmCoreModule } from '@agm/core';

import * as firebase from 'firebase';

import { AuthService } from '../services/auth.service';
import { auth } from 'firebase';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthService, private events: Events) {
    
    
    this.initializeApp();

    
    this.pages = this.auth.isAuthenticated() ? [
     
    ] : 
    [
      { title: 'Naslovnica', component: TabsPage },
      { title: 'Prijava', component: pages.LoginPage },
      { title: 'FAQ', component: pages.FaqPage},
      { title: 'Info', component: pages.InfoPage}
    ];

  }
  ngOnInit(){
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyAglsHEot1LymES-UU8nT1cJsFhWlzcEPw',
        authDomain: 'sezonasnizenja-1516963711219.firebaseapp.com',
        databaseURL: 'https://sezonasnizenja-1516963711219.firebaseio.com',
        storageBucket: 'sezonasnizenja-1516963711219.appspot.com',
        messagingSenderId: '822483050083'
      }
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();

      let authRef = this.auth;
      let ref = this;

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in
          // Show them the authenticated content...
          console.log("you are logged in");
          firebase.auth().currentUser.getIdToken().then(
            (res) => {
              //setting up old token
              authRef.token = res;
              ref.changePageOnIsAuthenticated();
              ref.splashScreen.hide()
              }
          );
        } else {
          // No user is signed in
          // Let's sign them in
          ref.changePageOnIsAuthenticated();
          console.log("you need to login");
          ref.splashScreen.hide()
        }
      });

      // this.auth.getTokenAsync().then(
      //   ()=>{
      //     console.log(this.auth.isAuthenticated());
      //     this.splashScreen.hide();
      //   }
      // )
      console.log(this.auth.isAuthenticated());
      this.splashScreen.hide()
      //if we sign in
      this.events.subscribe("login:changed",() =>{
        console.log(this.auth.isAuthenticated());
        this.changePageOnIsAuthenticated();
      });
    });
  }

  changePageOnIsAuthenticated(){
    this.pages = this.auth.isAuthenticated() ? [
        
    ] : 
    [
      { title: 'Naslovnica', component: TabsPage },
      { title: 'Prijava', component: pages.LoginPage },
      { title: 'FAQ', component: pages.FaqPage},
      { title: 'Info', component: pages.InfoPage}
    ];

    this.rootPage = this.auth.isAuthenticated() ? pages.UserPage : TabsPage;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title === 'Naslovnica')
      this.nav.setRoot(page.component);
    else
      this.nav.push(page.component);
  }

}
