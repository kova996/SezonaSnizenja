import { AuthService } from './../services/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import * as pages from './../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { DiscountService } from '../services/discount';
import { DiscountItemComponent } from '../components/discount-item/discount-item';
import {Geolocation} from "@ionic-native/geolocation";
import { LocationService } from '../services/location';
import { HttpModule } from '@angular/http';
import {Camera} from "@ionic-native/camera";
import {AngularFireDatabaseModule, AngularFireDatabase} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import { MaxLengthPipe } from '../pipes/length-pipe';
import {IonicStorageModule, Storage} from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    MaxLengthPipe,
    // pages.HomePage,
    TabsPage,
    pages.HomePage,
    pages.FavoritesPage,
    pages.CategoryPage,
    pages.CatalogPage,
    pages.LoginPage,
    pages.FaqPage,
    pages.InfoPage,
    pages.ArticlePage,
    pages.RegisterPage,
    pages.UserPage,
    pages.ProfilePage,
    pages.AllActiveDiscountsPage,
    pages.AllDiscountsPage,
    pages.DiscountAddPage,
    pages.DiscountHistoryPage,
    pages.CategoryDetailPage,
    DiscountItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp( {
      apiKey: 'AIzaSyAglsHEot1LymES-UU8nT1cJsFhWlzcEPw',
      authDomain: 'sezonasnizenja-1516963711219.firebaseapp.com',
      databaseURL: 'https://sezonasnizenja-1516963711219.firebaseio.com',
      storageBucket: 'sezonasnizenja-1516963711219.appspot.com',
      messagingSenderId: '822483050083'
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // pages.HomePage
    TabsPage,
    pages.HomePage,
    pages.FavoritesPage,
    pages.CategoryPage,
    pages.CatalogPage,
    pages.LoginPage,
    pages.FaqPage,
    pages.InfoPage,
    pages.ArticlePage,
    pages.RegisterPage,
    pages.UserPage,
    pages.ProfilePage,
    pages.AllActiveDiscountsPage,
    pages.AllDiscountsPage,
    pages.DiscountAddPage,
    pages.DiscountHistoryPage,
    pages.CategoryDetailPage,
    DiscountItemComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DiscountService,
    Geolocation,
    LocationService,
    AuthService,
    Camera,
    AngularFireDatabase
  ]
})
export class AppModule {}
