import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCuponPage } from './modal-cupon.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCuponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCuponPageRoutingModule {}
