import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCuponPage } from '../modalCupon/modal-cupon.page';
import { AlertController } from '@ionic/angular';

import { DataService } from './../data-service.service';

import { NavController } from '@ionic/angular';
import { ModalService } from '../modalCambioPerfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private modalCtrl:ModalController,
    public alertController: AlertController,
    private dataService: DataService,
    private modalService: ModalService, 
    public navCtrl : NavController) { 
  
  }
  id= localStorage.getItem('usuario_id');
foto = '' ;
puntos ;
dinero;
imagenes=[
  "perfil1",
  "perfil2", 
  "perfil3",
  "perfil4",
  "perfil5",
  "perfil6",
  "perfil7",
  "perfil8"
]

habilitarEditar = false;
  ngOnInit() {
    
  //console.log("id en perfil"+this.id);
    //petición para obtener datos del usuario y agregarlos desde que inicia la vista
    var info = {
      opcion:'perfil',
      id:this.id
  
    }
    //console.log(info);
    
    this.dataService.post('perfil', info).subscribe((data:any)=>{
      //console.log(data);
       this.foto='assets/fotosPerfil/' + data[0].avatar+'.png';
      document.getElementById("idNombre").setAttribute("value", data[0].username);
      document.getElementById("idContrasena").setAttribute("value", data[0].contrasena);
      document.getElementById("idCorreo").setAttribute("value",data[0].correo);

    })
  
  }
  alertError() {
    this.alertController.create({
      header: '¡Error!',
      message: 'Error al editar información de perfil',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });

  };
  alertOk() {
    this.alertController.create({
      header: '¡Editado con éxito!',
      message: 'Información del perfil editada con éxito',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }
 
  async abrirModalCupon() {
    //crear modal
    const modal = await this.modalCtrl.create( {
      component:ModalCuponPage, 
      componentProps: {
      }
     });

    //abrir modal 
     await modal.present();
     //acciones que cierran modal y tratando datos recibidos del modal 
     const { data } = await modal.onDidDismiss();
    

  }
  
  editar(){
    //Cambio de botones y cambio de la accion de la función según sea el caso
    
    if (this.habilitarEditar == true){
      this.habilitarEditar=false;
      //console.log("mandar datos")
      document.getElementById("idEditar").setAttribute(
        "style","margin-right: 5%; background-color:green; color: white");
        document.getElementById("idNombre").setAttribute("disabled","true");
        document.getElementById("idContrasena").setAttribute("disabled","true");
        document.getElementById("idCorreo").setAttribute("disabled","true");
        var info = {
          opcion:'editarPerfil',
          id:this.id,
          username:((document.getElementById("idNombre") as HTMLInputElement).value),
          contrasena:((document.getElementById("idContrasena") as HTMLInputElement).value),
          correo:((document.getElementById("idCorreo") as HTMLInputElement).value),
        }
       
        this.dataService.post('perfil', info).subscribe((data:any)=>{
           
           if(data == true){
             this.alertOk();
           }
           else{
            this.alertError();
           }
    
        })

    }
    else{
      //console.log("cambiar boton");
      document.getElementById("idEditar").setAttribute(
        "style","margin-right: 5%; background-color:white; border-color:green; color: green");

        document.getElementById("idNombre").removeAttribute("disabled");
        document.getElementById("idContrasena").removeAttribute("disabled");
        document.getElementById("idCorreo").removeAttribute("disabled");
      this.habilitarEditar=true;
      }
  
  }


  cerrarSesion(){
    
    localStorage.setItem('usuario_id',null);
    this.navCtrl.navigateRoot('/inicio-sesion');
    

  }

  
  openModal() {
    document.getElementById('idFondo').style.display = 'block';
  }

  cambiarPerfil(data:any) {
  
  document.getElementById('idFondo').style.display = 'none';

    this.foto='assets/fotosPerfil/' + data + '.png';

     //mandar cambio de foto de perfil a la base de datos
     var info = {
      opcion:'cambioFotoPerfil',
      id:this.id,
      avatar:data
    }
    //console.log(info);
    this.dataService.post('perfil', info).subscribe((data:any)=>{
       
       if(data =! true){
        this.alertError();
       }

    })

}

cerrarModalFoto(){
  
  document.getElementById('idFondo').style.display = 'none';
}


}