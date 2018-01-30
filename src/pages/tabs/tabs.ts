import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { UftPage } from '../uft/uft';
import { MapaPage } from '../mapa/mapa';
import { MensagemPage } from '../mensagem/mensagem';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = UftPage;
  tab5Root = MapaPage;
  tab6Root = MensagemPage;  

  constructor() {

  }
}
