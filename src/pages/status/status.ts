import { Component, OnInit  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ServiceProvider } from '../../providers/service/service';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { SetorcursoProvider } from '../../providers/setorcurso/setorcurso';

@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage implements OnInit {
  private url2:string = 'https://palmas.uft.edu.br/grad/jornalismo/calangomobile/apiRecuperaSetorCurso.php';
  public setores: Array<{}>;
  
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

  ionViewCanEnter(){
    return this.auth.userLogado();
  }

  getSetores(){
    this.http.get(this.url2).subscribe((data:any )=>{
      data = JSON.parse(data['_body']);
      this.setores = data;
      console.log(this.setores);     
    });   
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
              status:data,
              setor:req.nome
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

}