import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';
import { HorarioPage } from '../horario/horario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  selectedItem: any;
  icons: string[];
  private url2:string = 'https://palmas.uft.edu.br/grad/jornalismo/calangomobile/apiRecuperaAviso.php';
  public avisos: Array<{}>;
  //public myDate: String = new Date().toISOString();
  //public myDate2: String = new Date().toString().substring(4,24);
  public aviso: any= {
    usuario: 0,
    aviso: "",
    titulo: "",
    data: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {

  }

  ionViewWillEnter(){
    this.getAvisos();
   }
   
  ngOnInit(){
    this.getAvisos();
  }

  getAvisos(){
    this.http.get(this.url2).subscribe((data:any )=>{
      data = JSON.parse(data['_body']);
      this.avisos = data;
      console.log(this.avisos);     
    });   
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  horario(){
    this.navCtrl.push(HorarioPage);
  }

}
