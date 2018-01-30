//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  private url:string = 'http://localhost/';

  constructor(public http: Http) {
    
    console.log('Hello ServiceProvider Provider');
  }
  getData(){
      this.http.get('').map(res => res.json())
  }

  listaProfessor(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiRecupera1.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  listaProfessores(){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiRecupera.php",
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  postData(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiCadastraProfessor.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  deletaProfessor(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiDeletaProfessor.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  editaProfessor(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiEditaProfessor.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  alteraSenha(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiAlteraSenha.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

  recuperaSenha(parans){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url+"apiRecuperaSenha.php",parans,
  {headers:headers,
  method:"POST"
  }).map((res: Response) => {return res.json();});
  }

}
