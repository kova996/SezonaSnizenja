import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterDetailPage } from './register-detail';

@NgModule({
  declarations: [
    RegisterDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterDetailPage),
  ],
})
export class RegisterDetailPageModule {}
