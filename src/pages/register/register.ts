import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') user;
  @ViewChild('password')password;
  constructor(private alertctrl:AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

alert(message:string){
this.alertctrl.create({
  title: 'Info!',
  subTitle: message,
  buttons: ['OK']
}).present();
}

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data =>{
      console.log('got data',data);
      this.alert('You are Suceesfully Registerd!');
    })
    .catch(error =>{
console.log('got an error',error);
this.alert(error.message);
    });
    console.log(this.user.value, this.password.value)
    
      
    
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
