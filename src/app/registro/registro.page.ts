import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { DataService } from './../data-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(
    public alertController: AlertController,
    private dataService: DataService,
    public navCtrl: NavController) {}
  ngOnInit() {
  }
  foto = 'assets/fotosPerfil/perfil0.png' ;
  avatar='';
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
  openModal() {
    document.getElementById('idFondo').style.display = 'block';
  }
  cambiarPerfil(data:any) {
  document.getElementById('idFondo').style.display = 'none';
  this.avatar=data;
    this.foto='assets/fotosPerfil/' + data + '.png';
}
cerrarModalFoto(){
  document.getElementById('idFondo').style.display = 'none';
}
registrar(){
  var info = {
    opcion:'registrar',
    nombre:((document.getElementById("nombreId") as HTMLInputElement).value),
    correo:((document.getElementById("correoId") as HTMLInputElement).value),
    contrasena:((document.getElementById("contraId") as HTMLInputElement).value),
    avatar:this.avatar  
  }
  this.dataService.post('registro', info).subscribe((data:any)=>{
    if(data!='error'){
      localStorage.setItem('usuario_id', data[0]);
      this.alertOk();
    }
  })
}
alertError() {
  this.alertController.create({
    header: '¡Ocurrió un error!',
    message: 'No se pudo crear el perfil, por favor inténtalo de nuevo',
    buttons: ['OK']
  }).then(res => {
    res.present();
  });
};
async alertOk() {
   const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: '¡Usuario creado!',
    message: 'Perfil creado con éxito',
    buttons: [
      {
        text: 'Aceptar',
        cssClass: 'primary',
        handler: () => {
          this.navCtrl.navigateRoot('tablinks/perfil');
        }
      },
    ]
  });
   alert.present();
}
}
