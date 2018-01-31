import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SetorcursoProvider{
  private url:string = 'http://172.16.3.59:80/';

  constructor(public http: Http) {
    
    console.log('Hello ServiceProvider Provider');
  }
  getData(){
      this.http.get('').map(res => res.json())
  }

  listaUm(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiRecupera1SetorCurso.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  lista(){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiRecuperaSetorCurso.php",
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  postData(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiCadastraSetorCurso.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  deleta(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiDeletaSetorCurso.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  edita(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiEditaSetorCurso.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  alteraStatus(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiAlteraStatus.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

}
