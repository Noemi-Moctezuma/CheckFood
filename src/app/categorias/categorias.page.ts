import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(
    public navCtrl: NavController) { }

  
  object: {[key: number]: string} = 
  {1: 'LÁCTEOS Y REFRIGERADOS', 2: 'BEBIDAS', 
  3:'BOTANAS', 4:'DULCES', 5:'BEBÉS', 6:'CEREALES', 
  7:'SALCHICHONERÍA Y CARNES', 8:'ENLATADOS Y CONSERVAS', 9:'ALIMENTOS SALUDABLES'};
  map = new Map([[1, 'LÁCTEOS Y REFRIGERADOS'], [2, 'BEBIDAS'], 
  [3, 'BOTANAS'], [4, 'DULCES'], [5, 'BEBÉS'], [6, 'CEREALES'],
   [7, 'SALCHICHONERÍA Y CARNES'], [8, 'ENLATADOS Y CONSERVAS'], [9, 'ALIMENTOS SALUDABLES']]);

  ngOnInit() {
  }
    
  seleccionarCategoria(data){
    console.log(data);
    localStorage.setItem('categoria_id', data);
    this.navCtrl.navigateRoot('/categoria-seleccionada');
  }
  
}
