import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { DataService } from './../data-service.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
   constructor( private dataService: DataService, 
    private keyboard: Keyboard, 
    public alertController: AlertController,
    public navCtrl: NavController,
    ) { }

  ngOnInit() {

  }
iniciarSesion(){
  var info = {
    opcion:'inicioSesion',
    nombre:((document.getElementById("nombreId") as HTMLInputElement).value),
    contra:((document.getElementById("contraId") as HTMLInputElement).value)
  }

  
  //console.log(info);
  
 this.dataService.post('inicioSesion', info).subscribe((data:any)=>{
    if(data!=false){
     // console.log(data[0].id);
      
    localStorage.setItem('usuario_id', data[0].id);
    
    this.navCtrl.navigateRoot('/tablinks/perfil');
    }
    else{
      this.alertError();
    }
  })
}

alertError() {
  this.alertController.create({
    header: '¡Error al entrar!',
    message: 'Información de usuario incorrecta',
    buttons: ['OK']
  }).then(res => {
    res.present();
  });
}
}
