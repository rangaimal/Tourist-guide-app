import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GuidePage } from '../pages/guide/guide';
import { HotelsPage } from '../pages/hotels/hotels';
import { Geolocation } from '@ionic-native/geolocation';
import { SamanPage } from '../pages/saman/saman';
import { BopathPage } from '../pages/bopath/bopath';
import{SenanayakaPage} from '../pages/senanayaka/senanayaka';
import{MinipuraPage} from '../pages/minipura/minipura';
import{LakePage} from '../pages/lake/lake';
import{SerenePage} from '../pages/serene/serene';
import{UdawalawaPage} from '../pages/udawalawa/udawalawa';
import{SinPage} from '../pages/sin/sin';
import{BandaraPage} from '../pages/bandara/bandara';
import{CentauriaPage} from '../pages/centauria/centauria';
import{Guide1Page} from '../pages/guide1/guide1';
import{Guide2Page} from '../pages/guide2/guide2';
import{Guide3Page} from '../pages/guide3/guide3';
import{Guide4Page} from '../pages/guide4/guide4';
import{Guide5Page} from '../pages/guide5/guide5';
import{Guide6Page} from '../pages/guide6/guide6';
import{Guide7Page} from '../pages/guide7/guide7';
import{Guide8Page} from '../pages/guide8/guide8';
import{Guide9Page} from '../pages/guide9/guide9';
import{Guide10Page} from '../pages/guide10/guide10';
import{Guide11Page} from '../pages/guide11/guide11';
import{Guide12Page} from '../pages/guide12/guide12';
import{Guide13Page} from '../pages/guide13/guide13';
import{Guide14Page} from '../pages/guide14/guide14';
import{Guide15Page} from '../pages/guide15/guide15';
import{Guide16Page} from '../pages/guide16/guide16';
import{LoginPage} from '../pages/login/login';
import {Home1Page} from '../pages/home1/home1';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';


const firebaseAuth={
  apiKey: "AIzaSyAq_TBYQY-_Tq6xXWBFz86O18871KaYucI",
  authDomain: "test-project-e6012.firebaseapp.com",
  databaseURL: "https://test-project-e6012.firebaseio.com",
  projectId: "test-project-e6012",
  storageBucket: "test-project-e6012.appspot.com",
  messagingSenderId: "6039681259"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GuidePage,
    HotelsPage,
    SamanPage,
    BopathPage,
    SenanayakaPage,
    MinipuraPage,
    LakePage,
    SerenePage,
    UdawalawaPage,
    SinPage,
    BandaraPage,
    CentauriaPage,
    Guide1Page,
    Guide2Page,
    Guide3Page,
    Guide4Page,
    Guide5Page,
    Guide6Page,
    Guide7Page,
    Guide8Page,
    Guide9Page,
    Guide10Page,
    Guide11Page,
    Guide12Page,
    Guide13Page,
    Guide14Page,
    Guide15Page,
    Guide16Page,
    LoginPage,
    Home1Page,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GuidePage,
    HotelsPage,
    SamanPage,
    BopathPage,
    SenanayakaPage,
    MinipuraPage,
    LakePage,
    SerenePage,
    UdawalawaPage,
    SinPage,
    BandaraPage,
    CentauriaPage,
    Guide1Page,
    Guide2Page,
    Guide3Page,
    Guide4Page,
    Guide5Page,
    Guide6Page,
    Guide7Page,
    Guide8Page,
    Guide9Page,
    Guide10Page,
    Guide11Page,
    Guide12Page,
    Guide13Page,
    Guide14Page,
    Guide15Page,
    Guide16Page,
    LoginPage,
    Home1Page,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
