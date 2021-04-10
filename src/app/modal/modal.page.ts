import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private navParams: NavParams, public viewCtrl: ModalController){}
  data: any;
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
    this.banner_aurrera = this.data.banner_aurrera;
    this.banner_comer = this.data.banner_comer;
    this.banner_soriana = this.data.banner_soriana;
    this.precio_aurrera = this.data.precio_aurrera;
    this.precio_comer = this.data.precio_comer;
    this.precio_soriana = this.data.precio_soriana;
    this.fecha_aurrera = this.data.fecha_actualizacion_aurrera;
    this.fecha_soriana = this.data.fecha_actualizacion_comer;
    this.precio_soriana = this.data.fecha_actualizacion_soriana;
  }
  dismiss() {
    this.viewCtrl.dismiss();
    }

}
