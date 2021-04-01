import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IrelandnewsProvider } from '../../providers/irelandnews/irelandnews';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  irishNews : any[];
  //myNews: string[];
  myNews: string;
  myDescription: string;
  myTitleSize: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private inp: IrelandnewsProvider, private storage: Storage) {
  }

ionViewWillEnter(){
  console.log('ionViewWillEnter NewsPage');
  this.storage.get("myNews")//by key, either promise will work or not
  .then((data) => {
    if ((data == null) || (data == "Ireland")){
      this.inp.getIrishNews().subscribe(data =>{
        this.myNews = data.articles;
      });
    } else if (data == "USA"){
        this.inp.getUnitedStatesNews().subscribe(data =>{
          this.myNews = data.articles;
        });
  }else {
    this.inp.getCanadaNews().subscribe(data =>{
      this.myNews = data.articles;
    });
    }
  }
  )
  .catch((error) => alert("Problem accessing local storage for news."));
  }

  ionViewDidLoad(){
  this.storage.get("myTitleSize")
  .then((data)=> {
    if(data == null){
      this.myTitleSize = "16px";
      console.log('News page title description default.')      
    }else{
      this.myTitleSize = data;
      console.log("News page title description size: " + this.myTitleSize);
    }
  })
  .catch((error) => alert("Problem accessing local storage for title description size."));

  }

ionViewDidEnter(){
  this.storage.get("myDescription")
  .then((data)=> {
    if (data == null){
      this.myDescription = "12px";
      console.log('ionViewDidEnter news page description size: ' + this.myDescription);

    }else{
      this.myDescription = data;
      console.log('ionViewDidEnter news page description size: ' + this.myDescription);
    }
  })
.catch((error) => alert("Problem accessing local storage for news description size."));

}

}