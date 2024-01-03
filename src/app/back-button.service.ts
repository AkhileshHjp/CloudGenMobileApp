import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class BackButtonService {

  private previousUrl: string = "";
  private currentUrl: string = "";

  constructor(
    private router: Router,
    private platform: Platform,
  ) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  back() {
    this.platform.ready().then(() => {
      App.addListener('backButton', () => {
        if (this.router.url != "/") {
          window.location.replace(this.previousUrl)
          window.location.href = this.previousUrl;
          // alert(this.currentUrl)
          // alert(this.previousUrl) 
        } else {
          App.exitApp();
          // alert(this.currentUrl)
          // alert(this.previousUrl)
        }
      })
    })
  }
}