import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ServiceProvider } from '../../providers/service/service';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { DuvidasProvider } from '../../providers/duvidas/duvidas';


@Component({
  selector: 'page-cadastraduvidas',
  templateUrl: 'cadastraduvidas.html',
})
export class CadastraduvidasPage implements OnInit {
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
    public http: Http, 
    public service: ServiceProvider,
    public toastCtrl: ToastController,
    public auth: AuthProvider,
    public duvidasProvider: DuvidasProvider,
    public alertCtrl: AlertController
  ) {

  }

  ngOnInit(){
    this.getDuvidas();
  }

  getDuvidas(){
    this.http.get(this.url2).subscribe((data:any )=>{
      data = JSON.parse(data['_body']);
      this.duvidas = data;
      console.log(this.duvidas);     
    });   
  }

  salvar(p) {
    console.log("entrou no salvar duvida");
    this.duvida.pergunta = p.pergunta;
    this.duvida.resposta = p.resposta;
   
    this.duvidasProvider.postData(this.duvida)
      .subscribe((data:any )=>{
        let toast = this.toastCtrl.create({
        message: data.mensage,
        duration: 4000,
        position: 'bottom'
      });
      toast.present(); 
      this.getDuvidas();    
      });
      this.duvida.pergunta = "";
      this.duvida.resposta = "";
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
            this.duvidasProvider.deleta(p)
            .subscribe((data:any )=>{ let toast = this.toastCtrl.create({
              message: data.mensage,
              duration: 4000,
              position: 'bottom'
            });
            this.getDuvidas();
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
          name: 'pergunta',
          placeholder: 'Pergunta',
          value:req.pergunta
        },
        {
          name: 'resposta',
          placeholder: 'Resposta',
          value:req.resposta
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
            let params:any={
              id:req.id,
              pergunta:data.pergunta,
              resposta:data.resposta
            }
            console.log(params);
            this.duvidasProvider.edita(params)
            .subscribe((data:any )=>{
              let toast = this.toastCtrl.create({
                message: data.mensage,
                duration: 4000,
                position: 'bottom'
              });
              this.getDuvidas();
              toast.present();       
            });
          }
        }
      ]
    });
    prompt.present();
  }

 
  ionViewCanEnter(){
    return this.auth.userLogado();
  }
}