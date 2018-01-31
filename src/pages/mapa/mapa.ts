import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HorarioPage } from '../horario/horario';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  horario(){
    this.navCtrl.push(HorarioPage);
  }
  
}
