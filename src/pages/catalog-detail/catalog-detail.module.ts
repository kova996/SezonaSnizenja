import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogDetailPage } from './catalog-detail';

@NgModule({
  declarations: [
    CatalogDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CatalogDetailPage),
  ],
})
export class CatalogDetailPageModule {}
