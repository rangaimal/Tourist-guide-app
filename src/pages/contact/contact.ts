import { Component,ViewChild ,ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any;
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  
  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.DisplayMap();
  }
  DisplayMap(){
    const location=new google.maps.LatLng('6.7111','80.7916');
    const options={
      center:location,
      zoom:10
    };
    const map=new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location,map)
  }
  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    });
    
  }

}
