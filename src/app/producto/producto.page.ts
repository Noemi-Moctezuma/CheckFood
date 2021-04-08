import { Component, OnInit } from '@angular/core';

import {DataService} from './../data-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(
    private dataService: DataService
  ) { }
  id = 1;
  ngOnInit() {
    const sendData = {
      opcion: 'info',
      id: this.id
    };
    this.dataService.post('producto', sendData).subscribe(data =>
      {
        const dataResponse = data;
        console.log(dataResponse);
      });
  }

}
