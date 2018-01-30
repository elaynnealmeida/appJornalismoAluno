import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { StatusPage } from '../status/status';
import { ServiceProvider } from '../../providers/service/service';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { SetoruftProvider } from '../../providers/setoruft/setoruft';

@IonicPage()
@Component({
  selector: 'page-cadastrarsetoruft',
  templateUrl: 'cadastrarsetoruft.html',
})
export class CadastrarsetoruftPage implements OnInit {
  private url: string = 'http://localhost/apiCadastraSetorUFT.php';
  selectedItem: any;
  icons: string[];
  private url2: string = 'http://localhost/apiRecuperaSetorUFT.php';
  public setores: Array<{}>;
  public myDate: String = new Date().toISOString();
  public setor: any = {
    setor: "",
    local: "",
    telefone: "",
    dia: "",
    horario: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public service: ServiceProvider,
    public toastCtrl: ToastController,
    public auth: AuthProvider,
    public setorProvider: SetoruftProvider,
    public alertCtrl: AlertController
  ) {

  }

  ngOnInit() {
    this.getSetores();
  }

  getSetores() {
    this.http.get(this.url2).subscribe((data: any) => {
      data = JSON.parse(data['_body']);
      this.setores = data;
      console.log(this.setores);
    });
  }

  /* ionViewCanEnter(){
     return this.auth.userLogado();
   }*/

  salvar(p) {
    this.setor.setor = p.setor;
    this.setor.telefone = p.telefone;
    this.setor.local = p.local;
    this.setor.dia = p.dia;
    this.setor.horario = p.horario;
    //console.log("aviso: "+this.aviso.hora);
    this.setorProvider.postData(this.setor)
      .subscribe((data: any) => {
        let toast = this.toastCtrl.create({
          message: data.mensage,
          duration: 4000,
          position: 'bottom'
        });
        toast.present();
        this.getSetores();
      })
    this.setor.setor = "";
    this.setor.telefone = "";
    this.setor.local = "";
    this.setor.dia = "";
    this.setor.horario = "";
  }

  deletar(p) {
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
            this.setorProvider.deleta(p)
              .subscribe((data: any) => {
                let toast = this.toastCtrl.create({
                  message: data.mensage,
                  duration: 4000,
                  position: 'bottom'
                });
                this.getSetores();
                toast.present();
              });
          }
        }
      ]
    });
    prompt.present();
  }


  editar(req) {
    let prompt = this.alertCtrl.create({
      title: 'Editar Setor',
      inputs: [
        {
          name: 'setor',
          placeholder: 'Setor',
          value: req.setor
        },
        {
          name: 'local',
          placeholder: 'Local',
          value: req.local
        },
        {
          name: 'telefone',
          placeholder: 'Telefone',
          value: req.telefone
        }, 
        {
          name: 'dia',
          placeholder: 'Dia',
          value:req.dia
        },
        {
          name: 'horario',
          placeholder: 'Horário',
          value:req.horario
        }
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
              setor: data.setor,
              local: data.local,
              telefone: data.telefone,
              dia:data.dia,
              horario:data.horario
            }
            console.log(params);
            this.setorProvider.edita(params)
              .subscribe((data: any) => {
                let toast = this.toastCtrl.create({
                  message: data.mensage,
                  duration: 4000,
                  position: 'bottom'
                });
                this.getSetores();
                toast.present();
              });
          }
        }
      ]
    });
    prompt.present();
  }

/*  getSetor(id:any){   
    this.navCtrl.push(CadastrouserPage,{
     'setor_id':id     
    });
   
  }*/
  ionViewCanEnter(){
    return this.auth.userLogado();
  }
}