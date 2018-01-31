import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioPage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  horario(){
    this.navCtrl.push(HorarioPage);
  }
}
