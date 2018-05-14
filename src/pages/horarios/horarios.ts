import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HorarioPage } from '../horario/horario';
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html',
})
export class HorariosPage {
  _imageViewerCtrl: ImageViewerController;
  public horario1: any;
  //public horario1: string = 'assets/imgs/horarioMatutino.png';
  //public urhorario2: string = 'assets/imgs/horarioVespertino.png';
  //public horario3: string = 'assets/imgs/horarioNoturno.png';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    imageViewerCtrl: ImageViewerController) {
      this._imageViewerCtrl = imageViewerCtrl;
      this.horario1 = this.navParams.get('horario');

      console.log("horario: "+this.horario1);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorariosPage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  horario(){
    this.navCtrl.push(HorarioPage);
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

}
