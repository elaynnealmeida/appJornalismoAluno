import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AvisosProvider } from '../../providers/avisos/avisos';

@IonicPage()
@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',
})
export class AvisosPage implements OnInit {
  private url: string = 'http://localhost/apiPostaAviso.php';
  selectedItem: any;
  public perfil1: any;
  icons: string[];
  private url2: string = 'http://localhost/apiRecuperaAviso.php';
  public avisos: Array<{}>;
  public myDate: String = new Date().toISOString();
  public myDate2: String = new Date().toString().substring(4, 24);
  public aviso: any = {
    usuario: 0,
    aviso: "",
    titulo: "",
    data: "",
    hora: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public toastCtrl: ToastController,
    public auth: AuthProvider,
    public avisoProvider: AvisosProvider,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {
    this.storage.get('login').then(val => {
      if (val !== null) {
        this.perfil1 = val;
        this.perfil1 = this.perfil1.toString().replace('["', '');
        this.perfil1 = this.perfil1.toString().replace('"]', '');
      }
    });
  }

  ngOnInit() {
    this.getAvisos();
  }

  getAvisos() {
    this.http.get(this.url2).subscribe((data: any) => {
      data = JSON.parse(data['_body']);
      this.avisos = data;
      //console.log(this.avisos);
    });
  }

  ionViewCanEnter(){
    return this.auth.userLogado();
  }

  salvar(p) {
    //console.log("entrou no salvar aviso");
    this.aviso.titulo = p.titulo;
    this.aviso.aviso = p.aviso;
    this.aviso.hora = this.myDate;
    this.aviso.data = this.myDate2;
    this.aviso.usuario = this.perfil1;
    this.avisoProvider.postData(this.aviso)
      .subscribe((data: any) => {
        let toast = this.toastCtrl.create({
          message: data.mensage,
          duration: 4000,
          position: 'bottom'
        });
        toast.present();
        this.getAvisos();
      });
    this.aviso.titulo = "";
    this.aviso.aviso = "";
    this.aviso.hora = "";
    this.aviso.data = "";
  }

  deletarAviso(p) {
    let prompt = this.alertCtrl.create({
      title: 'Exclusão',
      message: "Tem certeza que quer excluir?",
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            this.avisoProvider.deletaAviso(p)
              .subscribe((data: any) => {
                let toast = this.toastCtrl.create({
                  message: data.mensage,
                  duration: 4000,
                  position: 'bottom'
                });
                this.getAvisos();
                toast.present();
              });
          }
        }
      ]
    });
    prompt.present();
  }


  editarAviso(req) {
    let prompt = this.alertCtrl.create({
      title: 'Editar Aviso',
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Titulo',
          value: req.titulo
        },
        {
          name: 'aviso',
          placeholder: 'Conteúdo',
          value: req.aviso
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            let params: any = {
              id: req.id,
              titulo: data.titulo,
              aviso: data.aviso
            }
            console.log(params);
            this.avisoProvider.editaAviso(params)
              .subscribe((data: any) => {
                let toast = this.toastCtrl.create({
                  message: data.mensage,
                  duration: 4000,
                  position: 'bottom'
                });
                this.getAvisos();
                toast.present();
              });
          }
        }
      ]
    });
    prompt.present();
  }


}

