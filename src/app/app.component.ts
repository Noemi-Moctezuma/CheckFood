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
      if (localStorage.getItem('usuario_id')){
        this.router.navigate(['/tablinks/']);
      }else{
        this.router.navigate(['/inicio-sesion/']);
      }
    });
  }
}
