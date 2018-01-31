import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';
import { HorarioPage } from '../horario/horario';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {
  private url2:string = 'http://172.16.3.59:80/apiRecupera.php';
  public professores: Array<{}>;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {

  }

  ngOnInit(){
    this.getProfessores();
  }

  getProfessores(){
    this.http.get(this.url2).subscribe((data:any )=>{
      data = JSON.parse(data['_body']);
      this.professores = data;
      console.log(this.professores);     
    });   
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  horario(){
    this.navCtrl.push(HorarioPage);
  }
}
