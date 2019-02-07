import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo-app';
  loadedFeature = 'recipe';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBqhtTVfy_NQGqRgCJl7gjq4K2k0f6wsBs",
      authDomain: "recipebook-30080.firebaseapp.com",
    });
  }
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
