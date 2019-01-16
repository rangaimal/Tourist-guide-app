import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{SamanPage} from '../saman/saman';
import{BopathPage} from '../bopath/bopath';
import{UdawalawaPage} from '../udawalawa/udawalawa';
import{SinPage} from '../sin/sin';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goTOSecondPage(){
    this.navCtrl.push(SamanPage )
  }
  goTOSecondPage1(){
    this.navCtrl.push(BopathPage)
  }
  goTOSecondPage2(){
    this.navCtrl.push(UdawalawaPage)
  }
  goTOSecondPage3(){
    this.navCtrl.push(SinPage)
  }
}
