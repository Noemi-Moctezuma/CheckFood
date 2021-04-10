import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProductoPage } from './producto.page';
import { ProductoPageRoutingModule } from './producto-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule,
    FontAwesomeModule],
  declarations: [ProductoPage]
})
export class ProductoPageModule {}
