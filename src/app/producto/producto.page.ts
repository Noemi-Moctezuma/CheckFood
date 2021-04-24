import { Component, OnInit } from '@angular/core';

import { DataService } from './../data-service.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './../modal/modal.page';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
id: any;
nombre: any;
precio_comer: any;
precio_soriana: any;
precio_aurrera: any;
fecha_actualizacion_comer: any;
fecha_actualizacion_soriana: any;
fecha_actualizacion_aurrera: any;
banner_comer: any;
banner_aurrera: any;
banner_soriana: any;
ingredientes: any;
cantidad_tamano: any;
azucares: any;
sodio: any;
grasas: any;
fibra: any;
adulcorante: any;
calorias: any;
aditivos: any;
sellos: any;
imagen_rt: any;
data_modal: any[];
producto_id = 3;
// producto_id = 5;
user_id = 2;
banner_publicidad: any;
  constructor(
    private dataService: DataService,
    public modalController: ModalController
  ) { }

  async precios() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: this.data_modal
    });
    modal.present();
  }
  ngOnInit() {
    const sendData = {
      opcion: 'info',
      id: this.producto_id
    };
    this.dataService.post('producto', sendData).subscribe(data => {
        console.log(data);
        
        this.producto_id = data[0].id;
        this.nombre = data[0].nombre;
        this.precio_comer = data[0].precio_comer;
        this.precio_soriana = data[0].precio_soriana;
        this.precio_aurrera = data[0].precio_aurrera;
        this.fecha_actualizacion_comer = data[0].fecha_actualizacion_comer;
        this.fecha_actualizacion_soriana = data[0].fecha_actualizacion_soriana;
        this.fecha_actualizacion_aurrera = data[0].fecha_actualizacion_aurrera;
        this.banner_comer = data[0].banner_comer;
        this.banner_aurrera = data[0].banner_aurrera;
        this.banner_soriana = data[0].banner_soriana;
        this.banner_publicidad = data[0].banner_publicidad;
        this.ingredientes = data[0].ingredientes;
        this.cantidad_tamano = data[0].cantidad_tamano;
        this.azucares = data[0].azucares;
        this.sodio = data[0].sodio;
        this.grasas = data[0].grasas;
        this.fibra = data[0].fibra;
        this.adulcorante = data[0].adulcorante;
        this.calorias = data[0].calorias;
        this.aditivos = data[0].aditivos;
        this.sellos = data[0].sellos;
        this.imagen_rt = data[0].imagen_rt;
        //obtener el id del usuario
        //this.user_id = parseInt(localStorage.getItem('id'), 10);
        this.data_modal = [{
          precio_comer: this.precio_comer,
          nombre: this.nombre,
          tamano: this.cantidad_tamano,
          precio_soriana: this.precio_soriana,
          precio_aurrera: this.precio_aurrera,
          fecha_actualizacion_comer: this.fecha_actualizacion_comer,
          fecha_actualizacion_soriana: this.precio_soriana,
          fecha_actualizacion_aurrera: this.fecha_actualizacion_aurrera,
          banner_comer: this.banner_comer,
          banner_aurrera: this.banner_aurrera,
          banner_soriana: this.banner_soriana,
          banner_publicidad: this.banner_publicidad,
          user_id : this.user_id,
          producto_id : this.producto_id
        }];
      });
  }

}
