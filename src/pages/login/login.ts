import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';
import { AvisosPage } from '../avisos/avisos';
import { Http, Response, ResponseOptions, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  /* public professor = {
     nome: "",
     email: "",
     senha: ""
   };*/
  public professor2: any = {
    id: 0,
    nome: "",
    email: "",
    senha: ""
  };

  private url: string = 'http://172.16.3.59:80/';
  public perfil: any = [];
  public exibe: boolean = false;

  constructor(public navCtrl: NavController,
    public http: Http,
    public storage: Storage,
    public navParams: NavParams,
    public auth: AuthProvider,
    public toastCtrl: ToastController) {
  }


  login(req) {

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.http.post(this.url + "login.php", req,
      {
        headers: headers,
        method: "POST"
      }).map((res: Response) => { return res.json(); })
      .subscribe(data => {
       // console.log('data.length ' + data.length);
        if (data.length > 2) {
          this.storage.set('login', data);   
          this.exibe = true;    
          this.navCtrl.setRoot(AvisosPage);
        }
        else {
          let toast = this.toastCtrl.create({
            message: 'Login e/ou senha incorreto',
            duration: 4000,
            position: 'bottom'
          });
          toast.present();
        }

      });
  }


  alterarsenha() { }



  logout() {
    this.auth.logout();
  }

  isUser() {
    return this.auth.userLogado();
  }

}
