import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../login-page.component';

@Component({
  selector: 'app-aboutcompany',
  templateUrl: './aboutcompany.component.html',
  styleUrls: ['./aboutcompany.component.css']
})
export class AboutcompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    LoginPageComponent.moduleName="Company";
    LoginPageComponent.isServiceStyle=true;
    
  }

}
