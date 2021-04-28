import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { DataService } from './../data-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

isItemAvailable = false;
items = [];
idP;

  constructor(private dataService: DataService, public navCtrl: NavController){
    this.initializeItems();
  }

     initializeItems(){
         this.items = ["Leche Kids","Nesquik leche con cocoa", "Almond Yoplait",
        "Gastro Protect de Nestlé", "Queso Philadelphia de Kraft", "Gatorade sabor Naranja", "Sangría Casera", "Coca-Cola sabor original",
         "Del Valle Coco & Nada", "Adés Almendra sabor Vainilla", "Papas Toreadas sabor chile habanero", "Papas fritas Flamin´ Hot ",
          "Papas Pringles Original", "Sabritas Adobadas", "Botana surtida Paketaxo quexo", "Duvalín Bi", "Panditas", "M&M´s", "Mamut",
          "ChocoRoles", "Jarabe Karo Bebé", "Puré de manzana y mango Gerber", "Galletitas sabor vainilla de Gerber", "Postre de manzana sabor canela de Gerber",
          "Cini Minis", "Cookie Crisp", "Super Foods", "Fruity Pebbles", "Fitness Fruits", "Salchichas tipo cocktail de FUD", "Chilorio de cerdo Chata", "Salchichas de pechuga de pavo San Rafael",
          "Chorizo de pavo Fud", "Salchicha tipo Frankfurt de Peñaranda", "Pozole rojo La Costeña", "Campbell´s flor de calabaza", "Frijoles charros La Costeña", "Churritos Nopalia", "Natura –Buenos días– Galletas de ajonjolí y miel de Bimbo",
          "Barras de granola Nature Valley avena y miel", "VitaminWater"];
     }

     getItems(ev: any) {
         // Reset items back to all of the items
         this.initializeItems();

         // set val to the value of the searchbar
         const val = ev.target.value;

         // if the value is an empty string don't filter the items
         if (val && val.trim() !== '') {
             this.isItemAvailable = true;
             this.items = this.items.filter((item) => {
                 return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
             })
         } else {
             this.isItemAvailable = false;
         }
     }
     goProd(nombre){
       console.log(nombre);

       var info = {
        opcion:'goProd',
        nombre: nombre
      }
      this.dataService.post('inicio', info).subscribe((data:any)=>{
        this.idP = data[0].id;
        console.log(this.idP);
        localStorage.setItem('producto_id', this.idP);
        this.navCtrl.navigateRoot('/producto');
        // console.log(data);
             
     })

     }
}
