import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RespostaPage } from '../resposta/resposta';
import { LoginPage } from '../login/login';
import { HorarioPage } from '../horario/horario';

@Component({
  selector: 'page-duvidas',
  templateUrl: 'duvidas.html',
})
export class DuvidasPage implements OnInit {
  // private url: string = 'https://palmas.uft.edu.br/grad/jornalismo/calangomobile/apiCadastraSetorCurso.php';
   selectedItem: any;
   icons: string[];
   private url2:string = 'https://palmas.uft.edu.br/grad/jornalismo/calangomobile/apiRecuperaDuvidas.php';
   public duvidas: Array<{}>;
   public myDate: String = new Date().toISOString();
   public duvida: any= {
     id:0,
     pergunta: "",
     resposta: ""
   };
 
   constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public http: Http
   ) {
 
   }
 
   ngOnInit(){
     this.getDuvidas();
   }

   ionViewWillEnter(){
    this.getDuvidas();
   }
 
   getDuvidas(){
     this.http.get(this.url2).subscribe((data:any )=>{
       data = JSON.parse(data['_body']);
       this.duvidas = data;
       console.log(this.duvidas);     
     });   
   }
 
   ver(duvida1){
    this.navCtrl.push(RespostaPage,{
      'duvida': duvida1
    });
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  horario(){
    this.navCtrl.push(HorarioPage);
  }
}
