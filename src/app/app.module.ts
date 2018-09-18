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
import { TripPage } from '../pages/trip/trip';
import { AngularFireModule } from 'angularfire2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const firebaseAuth={
  apiKey: "AIzaSyDBTmTcZ9UP84Bc2aJvPj6XMPx0GLEthXU",
  authDomain: "tourism-fc983.firebaseapp.com",
  databaseURL: "https://tourism-fc983.firebaseio.com",
  projectId: "tourism-fc983",
  storageBucket: "tourism-fc983.appspot.com",
  messagingSenderId: "23590154204"
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
    TripPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth)
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
    TripPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
