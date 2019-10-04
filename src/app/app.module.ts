import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import para o arquivo de configuração do firebase pode ser utilizado no module principal
  //localizado em src/app/firebase.ts
import firebaseConfig from './firebase';
//import da library @angular/fire
import { AngularFireModule } from '@angular/fire';
//import para auth de @angular/fire
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    //import da library @angular/firebase utilizando o arquivo de configuração src/app/firebase.ts
    AngularFireModule.initializeApp(firebaseConfig),
    //import de auth da library @angular/firebase
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
