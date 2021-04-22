import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaSeleccionadaPageRoutingModule } from './categoria-seleccionada-routing.module';

import { CategoriaSeleccionadaPage } from './categoria-seleccionada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaSeleccionadaPageRoutingModule
  ],
  declarations: [CategoriaSeleccionadaPage]
})
export class CategoriaSeleccionadaPageModule {}
