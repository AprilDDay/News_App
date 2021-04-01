import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

/*
  Generated class for the IrelandnewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IrelandnewsProvider {

  //irishNews : any[];

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello IrelandnewsProvider Provider');
  }

    getIrishNews(): Observable<any> {
      return this.http.get("https://newsapi.org/v2/top-headlines?country=ie&apiKey=API_KEY_GOES_HERE");
    }
    getUnitedStatesNews():Observable<any> {
      return this.http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY_GOES_HERE");
    }
      getCanadaNews():Observable<any>{
      return this.http.get("https://newsapi.org/v2/top-headlines?country=ca&apiKey=API_KEY_GOES_HERE");
    }
}
