import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
/**
 * Pages
 */
import { LoginPage } from './login';
/**
 * Other dependencies
 */
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations : [
    LoginPage,
  ],
  imports : [
    IonicPageModule.forChild(LoginPage),
    TranslateModule.forChild()
  ],
  exports : [
    LoginPage
  ]  
})
export class LoginPageModule {}