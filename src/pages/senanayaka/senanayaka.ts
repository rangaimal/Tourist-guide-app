import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the SenanayakaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-senanayaka',
  templateUrl: 'senanayaka.html',
})
export class SenanayakaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alert:AlertController) {
  }
  openModal(){
    let alert=this.alert.create({
      title:"Successfully!",
      subTitle:"Book your Vehicle, Have Safe Ride",
      buttons:['ok']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SenanayakaPage');
  }

}
