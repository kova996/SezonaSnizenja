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
