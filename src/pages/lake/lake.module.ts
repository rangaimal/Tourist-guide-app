import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LakePage } from './lake';

@NgModule({
  declarations: [
    LakePage,
  ],
  imports: [
    IonicPageModule.forChild(LakePage),
  ],
})
export class LakePageModule {}
