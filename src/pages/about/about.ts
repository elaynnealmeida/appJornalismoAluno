import { Component, OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit { 
  private url2:string = 'http://localhost/apiRecuperaSetorCurso.php';
  public setores: Array<{}>;
  public cor: String = "";
  public setor: any= {
    nome: "",
    local: "",
    telefone: "",
    responsavel: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {

  }

  ngOnInit(){
    this.getSetores();
  }

  getSetores(){
    this.http.get(this.url2).subscribe((data:any )=>{
      data = JSON.parse(data['_body']);
      this.setores = data;
      console.log(this.setores);      
    });   
  }

}
