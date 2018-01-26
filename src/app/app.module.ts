
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

import { AngularFireModule } from 'angularfire2';

import { AgmCoreModule } from '@agm/core';

export const firebaseConfig = {
  apiKey: 'AIzaSyAglsHEot1LymES-UU8nT1cJsFhWlzcEPw',
  authDomain: 'sezonasnizenja-1516963711219.firebaseapp.com',
  databaseURL: 'https://sezonasnizenja-1516963711219.firebaseio.com',
  storageBucket: 'sezonasnizenja-1516963711219.appspot.com',
  messagingSenderId: '822483050083'
};

@NgModule({
  declarations: [
    MyApp,
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
    DiscountItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlOyEdeupFeoYLeElfx-PFj-Sb_LhNQZg'
    }),
    AngularFireModule.initializeApp(firebaseConfig)
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
    DiscountItemComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DiscountService
  ]
})
export class AppModule {}
