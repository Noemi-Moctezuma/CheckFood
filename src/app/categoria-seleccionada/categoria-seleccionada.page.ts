import { Component, OnInit } from '@angular/core';

import { DataService } from './../data-service.service';

@Component({
  selector: 'app-categoria-seleccionada',
  templateUrl: './categoria-seleccionada.page.html',
  styleUrls: ['./categoria-seleccionada.page.scss'],
})
export class CategoriaSeleccionadaPage implements OnInit {

  constructor(private dataService: DataService) {

   }
  idCategoria='2';
  foto;
  categoriaNombre;
  productos =[];
  ngOnInit() {
    
  this.foto='assets/categoriaSeleccionada/' + this.idCategoria+'.png';
//traer el nombre de la categoria
  var info = {
    opcion:'nombreCategoria',
    id:this.idCategoria

  }
  //console.log(info);
  
  this.dataService.post('categoriaSeleccionada', info).subscribe((data:any)=>{
    this.categoriaNombre=data[0].categoria;
    this.categoriaNombre=this.categoriaNombre.toUpperCase();

  })

  //traer todos los productos de la categoria seleccionada

  var info = {
    opcion:'productos',
    id:this.idCategoria

  }
  //console.log(info);
  
  this.dataService.post('categoriaSeleccionada', info).subscribe((data:any)=>{
    this.productos=data;
    //console.log(this.productos[0].imagen_rt);  

  })

  }

  seleccionarProducto(id){
    //console.log(id);
    localStorage.setItem('producto_id', id);
  }
  
}
