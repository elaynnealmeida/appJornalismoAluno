import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UftPage } from '../pages/uft/uft';
import { MapaPage } from '../pages/mapa/mapa';
import { MensagemPage } from '../pages/mensagem/mensagem';
import { LoginPage } from '../pages/login/login';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { StatusPage } from '../pages/status/status';
import { AvisosPage } from '../pages/avisos/avisos';
import { CadastrarsetorcursoPage } from '../pages/cadastrarsetorcurso/cadastrarsetorcurso';
import { CadastrarsetoruftPage } from '../pages/cadastrarsetoruft/cadastrarsetoruft';
import { PerfilPage } from '../pages/perfil/perfil';
import { HorarioPage } from '../pages/horario/horario';
import { HorariosPage } from '../pages/horarios/horarios';
import { CadastraduvidasPage } from '../pages/cadastraduvidas/cadastraduvidas';
import { DuvidasPage } from '../pages/duvidas/duvidas';
import { RespostaPage } from '../pages/resposta/resposta';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MensagemProvider } from '../providers/mensagem/mensagem';
import { AuthProvider } from '../providers/auth/auth';
import { AvisosProvider } from '../providers/avisos/avisos';
import { ServiceProvider } from '../providers/service/service';
import { SetorcursoProvider } from '../providers/setorcurso/setorcurso';
import { SetoruftProvider } from '../providers/setoruft/setoruft';
import { DuvidasProvider } from '../providers/duvidas/duvidas';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UftPage,
    MapaPage,
    MensagemPage,
    LoginPage,
    UsuariosPage,
    AvisosPage,
    StatusPage,
    CadastrarsetorcursoPage,
    CadastrarsetoruftPage,
    PerfilPage,
    HorarioPage,
    HorariosPage,
    CadastraduvidasPage,
    DuvidasPage,
    RespostaPage
  ],
  imports: [
    IonicImageViewerModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot( {
      name: '__mydb',
         driverOrder: ['indexeddb']
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UftPage,
    MapaPage,
    MensagemPage,
    LoginPage,
    UsuariosPage,
    AvisosPage,
    StatusPage,
    CadastrarsetorcursoPage,
    CadastrarsetoruftPage,
    PerfilPage,
    HorarioPage,
    HorariosPage,
    CadastraduvidasPage,
    DuvidasPage,
    RespostaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MensagemProvider,
    AuthProvider,
    AvisosProvider,
    ServiceProvider,
    SetorcursoProvider,
    SetoruftProvider,
    DuvidasProvider
  ]
})
export class AppModule {}
