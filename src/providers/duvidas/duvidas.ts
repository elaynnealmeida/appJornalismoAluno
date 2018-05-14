import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DuvidasProvider {
  private url:string = 'https://palmas.uft.edu.br/grad/jornalismo/calangomobile/';

  constructor(public http: Http) {
    
    console.log('Hello ServiceProvider Provider');
  }
  getData(){
      this.http.get('').map(res => res.json())
  }

  listaUm(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiRecupera1Duvida.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  lista(){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiRecuperaDuvidas.php",
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  postData(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiCadastraDuvidas.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  deleta(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiDeletaDuvida.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  edita(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiEditaDuvidas.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

}
