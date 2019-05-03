import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../login-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    LoginPageComponent.moduleName="Home";
    LoginPageComponent.isServiceStyle=false;
    if( window.localStorage )
    {
      if(!localStorage.getItem('firstLoad') )
      {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }  
      else
        localStorage.removeItem('firstLoad');
    }
  }

}
