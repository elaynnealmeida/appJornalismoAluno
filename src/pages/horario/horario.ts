import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HorariosPage } from '../horarios/horarios';
import { MapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {
  public horarioM: string = 'assets/imgs/horarioMatutino.png';
  public horarioV: string = 'assets/imgs/horarioVespertino.png';
  public horarioN: string = 'assets/imgs/horarioNoturno.png';

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

  horario1(){
    this.navCtrl.push(HorariosPage,{
      'horario': this.horarioM
    });
  }

  horario2(){
    this.navCtrl.push(HorariosPage,{
      'horario': this.horarioV
    });
  }

  horario3(){
    this.navCtrl.push(HorariosPage,{
      'horario': this.horarioN
    });
  }
}
