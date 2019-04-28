import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../login-page.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    LoginPageComponent.isServiceStyle=true;
    console.log(LoginPageComponent.isServiceStyle);
    
  }

}
