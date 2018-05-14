import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HorarioPage } from '../horario/horario';
import { LoginPage } from '../login/login';
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  _imageViewerCtrl: ImageViewerController;
  public horario1: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;   
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

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
  
}
