import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signIn(){
this.navCtrl.push(LoginPage)
  }
  register(){
    this.navCtrl.push(RegisterPage)

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Home1Page');
  }

}
