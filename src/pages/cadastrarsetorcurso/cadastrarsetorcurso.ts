import { Component, OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ServiceProvider } from '../../providers/service/service';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { SetorcursoProvider } from '../../providers/setorcurso/setorcurso';


@IonicPage()
@Component({
  selector: 'page-cadastrarsetorcurso',
  templateUrl: 'cadastrarsetorcurso.html',
})
export class CadastrarsetorcursoPage implements OnInit {
  private url: string = 'http://localhost/apiCadastraSetorCurso.php';
  selectedItem: any;
  icons: string[];
  private url2:string = 'http://localhost/apiRecuperaSetorCurso.php';
  public setores: Array<{}>;
  public myDate: String = new Date().toISOString();
  public setor: any= {
    nome: "",
    local: "",
    telefone: "",
    responsavel: "",
    dia: "",
    horario: "",
    status: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http, 
    public service: ServiceProvider,
    public toastCtrl: ToastController,
    public auth: AuthProvider,
    public setorProvider: SetorcursoProvider,
    public alertCtrl: AlertController
  ) {

  }

  ngOnInit(){
    this.getSetores();
  }

  getSetores(){
    this.http.get(this.url2).subscribe((data:any )=>{
      data = JSON.parse(data['_body']);
      this.setores = data;
      console.log(this.setores);     
    });   
  }

 /* ionViewCanEnter(){
    return this.auth.userLogado();
  }*/

  salvar(p) {
    console.log("entrou no salvar setor");
    this.setor.nome = p.nome;
    this.setor.telefone = p.telefone;
    this.setor.responsavel = p.responsavel;
    this.setor.local = p.local;
    this.setor.dia = p.dia;
    this.setor.horario = p.horario;
    this.setor.status = p.status;
    //console.log("aviso: "+this.aviso.hora);
    this.setorProvider.postData(this.setor)
      .subscribe((data:any )=>{
        let toast = this.toastCtrl.create({
        message: data.mensage,
        duration: 4000,
        position: 'bottom'
      });
      toast.present(); 
      this.getSetores();    
      });
      this.setor.nome = "";
      this.setor.telefone = "";
      this.setor.local = "";
      this.setor.dia = "";
      this.setor.horario = "";
      this.setor.responsavel = "";
      this.setor.status = "";
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
            .subscribe((data:any )=>{ let toast = this.toastCtrl.create({
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
          name: 'nome',
          placeholder: 'Nome',
          value:req.nome
        },
        {
          name: 'local',
          placeholder: 'Local',
          value:req.local
        }, 
        {
          name: 'responsavel',
          placeholder: 'Responsavel',
          value:req.responsavel
        },
        {
          name: 'telefone',
          placeholder: 'Telefone',
          value:req.telefone
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
            let params:any={
              id:req.id,
              nome:data.nome,
              local:data.local,
              responsavel:data.responsavel,
              telefone:data.telefone,
              dia:data.dia,
              horario:data.horario
            }
            console.log(params);
            this.setorProvider.edita(params)
            .subscribe((data:any )=>{
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

  alterarStatus(req) {
    let prompt = this.alertCtrl.create({
      title: 'Editar Setor',
      inputs: [
        {
          type: 'radio',
          label: 'Disponível',
          value: 'Disponível',
          checked:false         
        },
        {
          type: 'radio',
          label: 'Ocupado',
          value: 'Ocupado',
          checked:false          
        }, 
        {
          type: 'radio',
          label: 'Fechado',
          value: 'Fechado',
          checked:false
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
              status:data
            }
            console.log("params: "+params.id);
            console.log("params: "+params.status);
            this.setorProvider.alteraStatus(params)
            .subscribe((data:any )=>{
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
  ionViewCanEnter(){
    return this.auth.userLogado();
  }
}