import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandaraPage } from './bandara';

@NgModule({
  declarations: [
    BandaraPage,
  ],
  imports: [
    IonicPageModule.forChild(BandaraPage),
  ],
})
export class BandaraPageModule {}
