import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { MensagemProvider } from '../../providers/mensagem/mensagem';
import { LoginPage } from '../login/login';
import { HorarioPage } from '../horario/horario';

@Component({
  selector: 'page-mensagem',
  templateUrl: 'mensagem.html',
})
export class MensagemPage {
  public mensagem: any = {
    nome: "",
    matricula: "",
    titulo: "",
    conteudo: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public msgProvider: MensagemProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagemPage');
  }

  enviar(p) {
    console.log("entrou no enviar msg");
    this.mensagem.titulo = p.titulo;
    this.mensagem.nome = p.nome;
    this.mensagem.matricula = p.matricula;
    this.mensagem.conteudo = p.conteudo;
    if (p.titulo==='') {
      alert('Campo Título não pode ser vazio');
    }
    else if (p.nome==='') {
      alert('Campo Nome não pode ser vazio');
    }
    else if (p.matricula==='') {
      alert('Campo Matricula não pode ser vazio');
    }
    else if (p.conteudo==='') {
      alert('Campo Conteúdo não pode ser vazio');
    }
    else {
      this.msgProvider.postMensagem(this.mensagem)
        .subscribe((data: any) => {
          let toast = this.toastCtrl.create({
            message: data.mensage,
            duration: 4000,
            position: 'bottom'
          });
          toast.present();
        });
      this.mensagem.titulo = "";
      this.mensagem.nome = "";
      this.mensagem.matricula = "";
      this.mensagem.conteudo = "";
    }
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  horario(){
    this.navCtrl.push(HorarioPage);
  }
}
