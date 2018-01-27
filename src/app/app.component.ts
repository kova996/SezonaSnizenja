import { HomePage } from './../pages/home/home';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as pages from './../pages/pages';
import { TabsPage } from '../pages/tabs/tabs';

import { AgmCoreModule } from '@agm/core';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    
    this.pages = [
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
      this.splashScreen.hide();
    });
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
