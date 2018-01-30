import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//import { NavController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { AvisosPage } from '../../pages/avisos/avisos';


@Injectable()
export class AuthProvider {
  private url: string = 'http://localhost/';

  constructor(public http: Http,
   // public navCtrl: NavController,
    public storage: Storage
  ) {
    console.log('Hello AuthProvider Provider');
  }

  login(parans) {
    console.log(parans);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.url + "login.php", parans,
      {
        headers: headers,
        method: "POST"
      }).map((res: Response) => { return res.json(); })
      .subscribe(data=>{
       this.storage.set('login',data);
       //this.navCtrl.push(AvisosPage);
      });
  }


  userLogado() {
  return this.storage.get('login').then(val => {
      if (val!==null) {
        //console.log("val: "+val);
        return true;
      }
      else {
        //console.log("val null: "+val);
        return false;
      }
    });
  }

  logout() {
    this.storage.remove('login');
  }

}
