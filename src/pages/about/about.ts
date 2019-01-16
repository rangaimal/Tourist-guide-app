import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{SenanayakaPage} from '../senanayaka/senanayaka';
import{MinipuraPage} from '../minipura/minipura';
import{BandaraPage} from '../bandara/bandara';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  goTOSecondPage2(){
    this.navCtrl.push(SenanayakaPage)
  }
  goTOSecondPage3(){
    this.navCtrl.push(MinipuraPage)
  }
  goTOSecondPage4(){
    this.navCtrl.push(BandaraPage)
  }
}
