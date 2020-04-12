import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import{AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: "AIzaSyC6S5zVTFwlPFboUBfpbKyLsiSFq_amkFo",
  authDomain: "depressiondetect-d121b.firebaseapp.com",
  databaseURL: "https://depressiondetect-d121b.firebaseio.com",
  projectId: "depressiondetect-d121b",
  storageBucket: "depressiondetect-d121b.appspot.com",
  messagingSenderId: "65748125645",
  appId: "1:65748125645:web:5603dabf61bec7e5472684",
  measurementId: "G-LP7SS85NQZ"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],

})
export class AppModule {
  public arr=["assets/img/src.jpg"];

 }
