import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{LakePage} from '../lake/lake';
import{SerenePage} from '../serene/serene';
import{CentauriaPage} from '../centauria/centauria';
/**
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html',
})
export class HotelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelsPage');
  }
  goTOSecondPage4(){
    this.navCtrl.push(LakePage )
  }
  goTOSecondPage5(){
    this.navCtrl.push(SerenePage )
  }
  goTOSecondPage6(){
    this.navCtrl.push(CentauriaPage )
  }
}
