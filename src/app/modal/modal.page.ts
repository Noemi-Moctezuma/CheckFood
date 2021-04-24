import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { element } from 'protractor';
import { faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  banner_publicidad: any;

  constructor(
    private navParams: NavParams, 
    public viewCtrl: ModalController,
    public dataService: DataService,
    ){}
  user_id: any;
  producto_id: any;
  data: any;
  nombre: any;
  tamano: any;
  banner_aurrera: any;
  banner_comer: any;
  banner_soriana: any;
  precio_aurrera: any;
  precio_comer: any;
  precio_soriana: any;
  fecha_aurrera: any;
  fecha_comer: any;
  fecha_soriana: any;
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.data = this.navParams.data[0];
    console.log(this.data);
    
    this.nombre = this.data.nombre;
    this.tamano = this.data.tamano;
    this.banner_aurrera = this.data.banner_aurrera;
    this.banner_comer = this.data.banner_comer;
    this.banner_soriana = this.data.banner_soriana;
    this.banner_publicidad = this.data.banner_publicidad;
    this.precio_aurrera = this.data.precio_aurrera;
    this.precio_comer = this.data.precio_comer;
    this.precio_soriana = this.data.precio_soriana;
    this.fecha_aurrera = this.data.fecha_actualizacion_aurrera;
    this.fecha_soriana = this.data.fecha_actualizacion_comer;
    this.precio_soriana = this.data.fecha_actualizacion_soriana;
    this.user_id = this.data.user_id;
    this.producto_id = this.data.producto_id;
    console.log(this.user_id);
  }
  //cerrar modal muestra de precios
  dismiss() {
    this.viewCtrl.dismiss();
  }
  //cabrir modal in modal para sugerir precios
  sugerir(tienda){
    var nombre_t = tienda;
    setTimeout(function(){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    
      //cerrar modal in modal on backdrop click
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          nombre_t = null;
        }
      }      
      //aceptar y guardar precio nuevo
      let acceptButton: HTMLElement = document.getElementById("aceptar") as HTMLElement; 
      acceptButton.addEventListener("click", aceptar);
      function aceptar(){
        if (nombre_t){
            let precio = (<HTMLInputElement>document.getElementById("precio")).value;
            precio = precio.toString();
            precio = precio.slice(0, (precio.indexOf("."))+3);
            Number(precio);

            const sendData = {
              opcion: 'sugerirPrecio',
              user_id: this.user_id,
              producto_id: this.producto_id,
              precio: precio,
              tienda: nombre_t
            };
            console.log(sendData);
            
            this.dataService.post('producto', sendData).subscribe(data =>{
              console.log(data);
              
            })
        }
      }
      //cerrar modal in modal on button click
      let cancelButton: HTMLElement = document.getElementById("cancelar") as HTMLElement;
      cancelButton.addEventListener("click", cerrar);
      function cerrar(){
        setTimeout(function(){
          modal.style.display = "none";
          nombre_t = null;
        }, 300);
      }
    }, 300);
 
    }
}