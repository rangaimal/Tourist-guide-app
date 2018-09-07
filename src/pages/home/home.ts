import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public navParams: NavParams) {

  }
slider=[
{
  title:'welcome to trip',
  description:'Ionic is buili on top of',
  image:"assests/imgs/7402987_orig.jpeg"
},
{title:'welcome to hotels',
description:'Ionic is buili on top besta',
image:"assests/imgs/7402987_orig.jpeg"
},
{
  title:'welcome to restaurants',
description:'Ionic is buili on top of',
image:"assests/imgs/7402987_orig.jpeg"


}
];
}
