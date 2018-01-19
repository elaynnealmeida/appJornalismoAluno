import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-uft',
  templateUrl: 'uft.html',
})
export class UftPage implements OnInit {
  private url2: string = 'http://localhost/apiRecuperaSetorUFT.php';
  public setores: Array<{}>;
  public myDate: String = new Date().toISOString();
  public setor: any = {
    setor: "",
    local: "",
    telefone: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {

  }

  ngOnInit() {
    this.getSetores();
  }

  getSetores() {
    this.http.get(this.url2).subscribe((data: any) => {
      data = JSON.parse(data['_body']);
      this.setores = data;
      console.log(this.setores);
    });
  }

}
