import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HorarioPage } from '../horario/horario';

@Component({
  selector: 'page-resposta',
  templateUrl: 'resposta.html',
})
export class RespostaPage {
  //public duvida: any;
  public duvida: any= {
    id: 0,
    pergunta: "",
    resposta: ""
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.duvida = this.navParams.get('duvida');

      console.log("duvida: "+this.duvida.resposta);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespostaPage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  horario(){
    this.navCtrl.push(HorarioPage);
  }

}
