import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SetoruftProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SetoruftProvider {
  private url:string = 'http://localhost/';

  constructor(public http: Http) {
    
    console.log('Hello ServiceProvider Provider');
  }
  getData(){
      this.http.get('').map(res => res.json())
  }

  listaUm(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiRecupera1SetorUFT.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  lista(){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiRecuperaSetorUFT.php",
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  postData(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiCadastraSetorUFT.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  postHorario(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiCadastraHorarioUFT.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  deleta(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiDeletaSetorUFT.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  edita(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiEditaSetorUFT.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

}
