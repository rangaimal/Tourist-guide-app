import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinPage } from './sin';

@NgModule({
  declarations: [
    SinPage,
  ],
  imports: [
    IonicPageModule.forChild(SinPage),
  ],
})
export class SinPageModule {}
