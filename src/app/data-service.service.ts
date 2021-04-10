import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
    urlLaptop = 'http://192.168.0.19/webservice/checkfood/';
    url = 'http://localhost/webservice/checkfood/';
    api = '/service.php';
    
    post(model, params){
      return this.http.post(this.urlLaptop + model + this.api, params, {responseType: 'json'});
    }
}
