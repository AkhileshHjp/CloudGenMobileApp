import { Component, OnInit } from '@angular/core';
import { BackButtonService } from './back-button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit{
  title = 'NgMobileApp';

constructor(
  private backButton :BackButtonService 
){

}

  ngOnInit(): void {
    this.backButton.back()
  }
  
}
