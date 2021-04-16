import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCuponPageRoutingModule } from './modal-cupon-routing.module';

import { ModalCuponPage } from './modal-cupon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCuponPageRoutingModule
  ],
  declarations: [ModalCuponPage]
})
export class ModalCuponPageModule {}
