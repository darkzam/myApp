import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  langs = ['en', 'es'];

  constructor(public navCtrl: NavController, public translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log('Lenguage cambiado a: ' + this.translate.currentLang);
    });
  }

}
