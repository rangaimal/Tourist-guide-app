import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerenePage } from './serene';

@NgModule({
  declarations: [
    SerenePage,
  ],
  imports: [
    IonicPageModule.forChild(SerenePage),
  ],
})
export class SerenePageModule {}
