import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ModalModule } from './modalCambioPerfil';
import { ModalPageModule } from './modal/modal.module';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    HttpClientModule, FontAwesomeModule, ModalPageModule, ModalModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Screenshot, Keyboard],
  bootstrap: [AppComponent],
})
export class AppModule {
    constructor(library: FaIconLibrary){
      library.addIconPacks(fas, far, fab);
    }
}
