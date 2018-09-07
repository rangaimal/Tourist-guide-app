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
  description:'Ionic is built on top of',
  image:"assets/imgs/1.jpeg"
},
{title:'welcome to vehicle',
description:'Ionic is built on top of',
image:"assets/imgs/3.jpeg"
},
{
  title:'welcome to restaurants',
description:'Ionic is built on top of',
image:"assets/imgs/2.jpeg"


}
];
}
