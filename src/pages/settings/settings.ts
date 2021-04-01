import { Component, HostBinding } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SafeMethodCall } from '@angular/compiler';
import { IrelandnewsProvider } from '../../providers/irelandnews/irelandnews';

//NOTE: MUST HAVE A NAME ENTERED OR CAN'T SAVE ANY SETTINGS.
//NOTE: NAME THAT WAS SET WAS STILL IN AREA WHEN HE CHECKED AGAIN

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  //variables for name
  newName : string;
  myName : string;
  lengthOfName : number;

  //variables for news
  myNews: string;
 
  //variables for description size
  newDescription: string;
  myDescription: string;

  //variablse for title size
  myTitleSize: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private inp: IrelandnewsProvider, private storage: Storage) {
  }

  //FUNCTIONS FOR WHAT WILL LOAD, I.E. WHAT PEOPLE WILL GET TO SEE
  //to check if the key for myName is there
  ionViewWillEnter(){
    this.storage.get("myName")
    .then((data) => {
      if(data == null){
        this.myName = " "; //8 spaces
      }else {
      this.myName = data;
    }
    })
    .catch((error) => alert("Problem accessing local storage"));
  }

  //FUNCTIONS FOR SAVING INFO

  //for storing the name only, key & value pair
  saveName() {
      this.myName=this.newName;
      this.storage.set("myName", this.myName);
  }

  saveNews(){
   
    switch(this.myNews){
      case "Ireland":
        this.myNews = "Ireland";
        console.log("News from Ireland");
        break;
      case "USA":
        this.myNews = "USA";
        console.log("News from USA");
        break;
      case "Canada":
        this.myNews = "Canada";
        console.log("News from Canada");
        break;
      default:
        this.myNews = "Ireland";
        console.log("News from default: Ireland");
        break;
    }
    
    this.storage.set("myNews", this.myNews);
  }

  saveTitleSize(){
    switch(this.myTitleSize){
      case "1":
        this.myTitleSize = "10px";
        console.log("You picked size 1.");
        break;
      case "2":
        this.myTitleSize = "12px";
        console.log("You picked size 2.");
        break;
      case "3":
        this.myTitleSize = "14px";
        console.log("You picked size 3.");
        break;
      case "4":
          this.myTitleSize = "16px";
          console.log("You picked size 4.");
          break;
      case "5":
            this.myTitleSize = "30px";
            console.log("You picked size 5.");
            break;      
      default:
        this.myTitleSize = "16px";
        console.log("This is the default size: 4");
        break;
    }
    
    this.storage.set("myTitleSize", this.myTitleSize);
  }

  //function to change size of the news description
  saveDescriptionSize(){
    switch(this.myDescription){
      case "1":
        this.myDescription = "10px";
        console.log("You picked size 1.");
        break;
      case "2":
        this.myDescription = "12px";
        console.log("You picked size 2.");
        break;
      case "3":
        this.myDescription = "14px";
        console.log("You picked size 3.");
        break;
      case "4":
          this.myDescription = "16px";
          console.log("You picked size 4.");
          break;
      case "5":
            this.myDescription = "30px";
            console.log("You picked size 5.");
            break;      
      default:
        this.myDescription = "14px";
        console.log("This is the default size: 3");
        break;
    }
    
    this.storage.set("myDescription", this.myDescription);
  }
  

  //FUNCTION CALLED BY THE BUTTON on settings.html
  saveSettings(){
      this.saveName();
      this.saveNews();
      this.saveDescriptionSize();
      this.saveTitleSize();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
}
