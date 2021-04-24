import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  //la url de su compu; la ip es la que se muestra cuando corren el comando ionic serve
  //
    urlLaptop = 'http://192.168.1.74/webservice/checkfood/';
    url = 'http://localhost/webservice/checkfood/';
    api = '/service.php';
    
    post(model, params){
      return this.http.post(this.urlLaptop + model + this.api, params, {responseType: 'json'});
    }
}
