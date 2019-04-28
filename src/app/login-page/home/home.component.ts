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
    LoginPageComponent.isServiceStyle=false;
    console.log(LoginPageComponent.isServiceStyle);
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
