import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';


import { ModalCuponPage } from '../modalCupon/modal-cupon.page';
import { ModalCuponPageModule } from '../modalCupon/modal-cupon.module';


@NgModule({
  entryComponents:[
    ModalCuponPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    ModalCuponPageModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
