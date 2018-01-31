import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { StatusPage } from '../pages/status/status'; import { AvisosPage } from '../pages/avisos/avisos';
import { CadastrarsetorcursoPage } from '../pages/cadastrarsetorcurso/cadastrarsetorcurso';
import { CadastrarsetoruftPage } from '../pages/cadastrarsetoruft/cadastrarsetoruft';
import { AuthProvider } from '../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { UftPage } from '../pages/uft/uft';
import { MapaPage } from '../pages/mapa/mapa';
import { MensagemPage } from '../pages/mensagem/mensagem';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  public perfil: any = [];
  pages: Array<{ title: string, component: any }>;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = UftPage;
  tab5Root = MapaPage;
  tab6Root = MensagemPage;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public auth: AuthProvider,
    public storage: Storage) {
      
      platform.ready().then(() => {
        let funcaoRetorno = (data) => {
          // alert(JSON.stringify(data));
        };
  
        window["plugins"].OneSignal.startInit("9fb50308-97a8-4792-b005-262275f15d1c",
            "577801687898")
            .handleNotificationOpened(funcaoRetorno)
            .endInit();
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Usuários', component: UsuariosPage },
      { title: 'Avisos', component: AvisosPage },
      { title: 'Setores da UFT', component: CadastrarsetoruftPage },
      { title: 'Setores do Curso', component: CadastrarsetorcursoPage },
      { title: 'Alterar Status', component: StatusPage },
      { title: 'Perfil', component: PerfilPage }
    ];

    


    this.storage.get('login').then(val => {
      if (val !== null) {
        this.perfil = val;
        this.perfil = this.perfil.toString().replace('["', '');
        this.perfil = this.perfil.toString().replace('"]', '');
        this.rootPage = AvisosPage;
        //  return true;
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

    //this.app.getRootNav().push(page.component);

  }

}

