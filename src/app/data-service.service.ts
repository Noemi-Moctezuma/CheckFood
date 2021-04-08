import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
    url = 'http://localhost/webservice/checkfood/';
    api = '/service.php';
    
    post(model, params){
      return this.http.post(this.url + model + this.api, params, {responseType: 'json'});
    }
}
