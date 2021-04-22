import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaSeleccionadaPage } from './categoria-seleccionada.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaSeleccionadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaSeleccionadaPageRoutingModule {}
