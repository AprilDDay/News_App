import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { SettingsPage } from '../settings/settings';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  quotes: string[];
  author: string;
  myName: string;

  constructor(public navCtrl: NavController, private qp: QuotesProvider, private storage: Storage) {

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
    this.qp.getQuotes().subscribe(data => {
      this.quotes = data.contents.quotes; 
    });
  }

  ionViewWillEnter(){
    this.storage.get("myName")
      .then((data) => {
        this.myName=data;
      })
      .catch((err) => {
        alert("Error accessing storage");
      });
  }

  openNewsPage(){
    console.log("IN openNewsPage function...");
    this.navCtrl.push(NewsPage);
  }

  openSettingsPage(){
    console.log("IN openSettingsPage function...");
    this.navCtrl.push(SettingsPage);
  }

}
