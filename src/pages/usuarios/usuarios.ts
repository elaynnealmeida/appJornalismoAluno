import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ServiceProvider } from '../../providers/service/service';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage implements OnInit {
  private url: string = 'http://172.16.3.59:80/apiCadastraProfessor.php';
  selectedItem: any;
  icons: string[];
  private url2:string = 'http://172.16.3.59:80/apiRecupera.php';
  public professores: Array<{}>;
  public professor = {
    nome: "",
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http, 
    public service: ServiceProvider,
    public toastCtrl: ToastController,
    public auth: AuthProvider,
    public alertCtrl: AlertController
  ) {

  }

  ngOnInit(){
    this.getProfessores();
  }

  getProfessores(){
    this.http.get(this.url2).subscribe((data:any )=>{
      data = JSON.parse(data['_body']);
      this.professores = data;
      console.log(this.professores);     
    });   
  }

  ionViewCanEnter(){
    return this.auth.userLogado();
  }

  salvar(p) {
    this.service.postData(p)
      .subscribe((data:any )=>{
        let toast = this.toastCtrl.create({
        message: data.mensage,
        duration: 4000,
        position: 'bottom'
      });
      toast.present();    
      this.getProfessores(); 
      });    
      this.professor.nome = "";
      this.professor.email = "";
      this.professor.senha = "";  
  }

  deletarProfessor(p) {
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
            this.service.deletaProfessor(p)
            .subscribe((data:any )=>{ let toast = this.toastCtrl.create({
              message: data.mensage,
              duration: 4000,
              position: 'bottom'
            });
            this.getProfessores();
            toast.present();  
            });
          }
        }
      ]
    });
    prompt.present();
  }
   
  

  editarProfessor(req) {
    let prompt = this.alertCtrl.create({
      title: 'Editar Professor',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome',
          value:req.nome
        },
        {
          name: 'email',
          placeholder: 'Email',
          value:req.email
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
            let params:any={
              id:req.id,
              nome:data.nome,
              email:data.email
            }
            console.log(params);
            this.service.editaProfessor(params)
            .subscribe((data:any )=>{
              let toast = this.toastCtrl.create({
                message: data.mensage,
                duration: 4000,
                position: 'bottom'
              });
              this.getProfessores();
              toast.present();       
            });
          }
        }
      ]
    });
    prompt.present();
  }
}