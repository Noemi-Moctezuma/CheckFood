import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private location: Location,

  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.backButtonEvent();
      if (localStorage.getItem('usuario_id')){
        this.router.navigate(['/home/']);
      }
    });
  }
  backButtonEvent(): void {
    
    const event = fromEvent(document, 'backbutton');
    event.subscribe(async () => {
      if  (this.router.url === '/iniciar-sesion') {
        navigator['app'].exitApp();
      }
      else if (this.router.url === '/home' && localStorage.getItem('usuario_id')){
        navigator['app'].exitApp();
      }else {
        this.location.back();
      }
    });
  }
}
