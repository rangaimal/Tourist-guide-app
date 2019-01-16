import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Guide1Page} from '../guide1/guide1';
import{Guide2Page} from '../guide2/guide2';
import{Guide3Page} from '../guide3/guide3';
import{Guide4Page} from '../guide4/guide4';
import{Guide5Page} from '../guide5/guide5';
import{Guide6Page} from '../guide6/guide6';
import{Guide7Page} from '../guide7/guide7';
import{Guide8Page} from '../guide8/guide8';
import{Guide9Page} from '../guide9/guide9';
import{Guide10Page} from '../guide10/guide10';
import{Guide11Page} from '../guide11/guide11';
import{Guide12Page} from '../guide12/guide12';
import{Guide13Page} from '../guide13/guide13';
import{Guide14Page} from '../guide14/guide14';
import{Guide15Page} from '../guide15/guide15';
import{Guide16Page} from '../guide16/guide16';


/**
 * Generated class for the GuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html',
})
export class GuidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onButtonClicked1(){
    this.navCtrl.push(Guide1Page)
  }
  onButtonClicked2(){
    this.navCtrl.push(Guide2Page)
  }
  onButtonClicked3(){
    this.navCtrl.push(Guide3Page)
  }
  onButtonClicked4(){
    this.navCtrl.push(Guide4Page)
  }
  onButtonClicked5(){
    this.navCtrl.push(Guide5Page)
  }
  onButtonClicked6(){
    this.navCtrl.push(Guide6Page)
  }
  onButtonClicked7(){
    this.navCtrl.push(Guide7Page)
  }
  onButtonClicked8(){
    this.navCtrl.push(Guide8Page)
  }
  onButtonClicked9(){
    this.navCtrl.push(Guide9Page)
  }
  onButtonClicked10(){
    this.navCtrl.push(Guide10Page)
  }
  onButtonClicked11(){
    this.navCtrl.push(Guide11Page)
  }
  onButtonClicked12(){
    this.navCtrl.push(Guide12Page)
  }
  onButtonClicked13(){
    this.navCtrl.push(Guide13Page)
  }
  onButtonClicked14(){
    this.navCtrl.push(Guide14Page)
  }
  onButtonClicked15(){
    this.navCtrl.push(Guide15Page)
  }
  onButtonClicked16(){
    this.navCtrl.push(Guide16Page)
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidePage');
  }

}
