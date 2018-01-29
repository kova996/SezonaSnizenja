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

import { AgmCoreModule } from '@agm/core';


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
    pages.RegisterPage,
    pages.UserPage,
    pages.ProfilePage,
    pages.AllActiveDiscountsPage,
    pages.AllDiscountsPage,
    pages.DiscountAddPage,
    pages.DiscountHistoryPage,
    DiscountItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlOyEdeupFeoYLeElfx-PFj-Sb_LhNQZg'
    })
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
    DiscountItemComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DiscountService,
    AuthService
  ]
})
export class AppModule {}
