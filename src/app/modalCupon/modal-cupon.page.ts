
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DataService } from './../data-service.service';
//import { Screenshot } from '@ionic-native/screenshot/ngx';
@Component({
  selector: 'app-modal-cupon',
  templateUrl: './modal-cupon.page.html',
  styleUrls: ['./modal-cupon.page.scss'],
})
export class ModalCuponPage implements OnInit {

  constructor( private modalCtrl : ModalController, 
    public alertController: AlertController,
    private dataService: DataService,
    //private screenshot: Screenshot
    ) { }
puntos;
dinero;
id='2';
  ngOnInit() {
    this.obtenerPuntos();

  }
  obtenerPuntos(){
    
    var info = {
      opcion:'obtenerPuntos',
      id:this.id
    }
    this.dataService.post('perfil', info).subscribe((data:any)=>{
      this.puntos = data[0].puntos;
      this.dinero = (this.puntos)/10;
      console.log(this.dinero);
           
   })
  }


  //cerrar modal y mandar los parámetros a vista principal
  cancelar(){
    this.modalCtrl.dismiss({
      //nombre:data
    });
  }
  cerrarConInfo(data: any){
    this.modalCtrl.dismiss({
      //nombre:data
    });
  }
  
  alertError() {
    this.alertController.create({
      header: '¡Error!',
      message: 'Error al canjear cupón',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });

  };
  async aceptar() {
    if(this.puntos>0){
      
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: '¿Está seguro en cambiar el cupón?',
        message: 'Esta acción no se puede revertir',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'primary',
            handler: () => {
              console.log('Aceptar');

              var info = {
                opcion:'limpiarPuntos',
                id:this.id
              }
              this.dataService.post('perfil', info).subscribe((data:any)=>{
                if(data == true){
                  this.obtenerPuntos();
                  this.cupon();
                 }
                else{
                  this.alertError();
                }  
             })
            }
          }, {
            text: 'Cancelar',
            cssClass: 'secondary',
            handler: () => {
              console.log('Cancelar');
            }
          }
        ]
      });
  
      await alert.present();

    }
    else{
      
      this.alertController.create({
        header: '¡Error!',
        message: 'Tu saldo es insuficinete para canjear el cupón',
        buttons: ['OK']
      }).then(res => {
        res.present();
      });
      

    }


    }
    async cupon() {


      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Cupón',
        message: 'CF'+ this.id + "P" + this.puntos + "A",
        buttons: [
          {
            text: 'Tomar captura',
            cssClass: 'primary',
            handler: () => {
              console.log('Captura');
              //this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then();


            }
          }, {
            text: 'Cerrar',
            cssClass: 'secondary',
            handler: () => {
              console.log('Cerrar');
            }
          }
        ]
      });
  
      await alert.present();
    }
  
}
