import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MensagemProvider {
  private url:string = 'https://palmas.uft.edu.br/grad/jornalismo/calangomobile/';
  constructor(public http: Http) {
    console.log('Hello MensagemProvider Provider');
  }
  postMensagem(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiEnviaEmail.php",parans,
  {headers:headers, method:"POST" }).map((res: Response) => {return res.json();});
  }
}
