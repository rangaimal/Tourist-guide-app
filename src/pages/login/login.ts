import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password')password;

  constructor(private alertctrl:AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }
  alert(message:string){
    this.alertctrl.create({
      title: 'Succesfully!',
      subTitle: 'you are logged in',
      buttons: ['OK']
    }).present();
    }

  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data =>{
      console.log('got data',this.fire.auth.currentUser);
      this.alert('Suceess! you\'re logged in');
      this.navCtrl.setRoot(TabsPage);

    })
    .catch(error =>{
console.log('got an error',error);
this.alert(error.message);
    });
console.log(this.user.value, this.password.value)
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
