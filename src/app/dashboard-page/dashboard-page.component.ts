import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';
import { FormBuilder } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRouteSnapshot } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { DataAccessService } from '../services/data-access.service';

import {LoginResultModel} from '../model/LoginResultModel'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  isAdmin:boolean=false;
  message:string;
  loginModel:LoginResultModel;
  constructor(private api: ApiService, private customer: CustomerService,location: PlatformLocation, private router: Router,
    private formBuilder: FormBuilder,private dataAccess :DataAccessService) {
      //alert("cons")
    //   if(localStorage.getItem("TOKEN")!=null){
    // location.onPopState(() => {
    //   this.router.navigateByUrl('/dashboard/userlist');
    //   history.forward();
    //   });
    // }else{
    //   this.router.navigateByUrl('/home');
    // }
  }

  ngOnInit(){
    //alert("oninit")
    this.dataAccess.currentMessage.subscribe(message => this.message = message)
    //this.loginModel =JSON.parse(this.message);
    this.loginModel =JSON.parse(localStorage.getItem("userinfo"));
    console.log(this.loginModel);
    if(this.loginModel.Status==1 && this.loginModel.IsActive){
      this.isAdmin=true;
    }
  }

  redirectTo(type){
  localStorage.setItem("isfromuser",'true');
  if(type==1)
  window.open("https://www.invokana-claim.com/", "_blank");
  else if(type==2)
   window.open("https://www.xarelto-claims.com/", "_blank");
  else if(type==3)
    window.open("https://www.ivc-claims.com/", "_blank");
  }

  logOut(){
    //localStorage.setItem("TOKEN",null);
    localStorage.removeItem("TOKEN")
    localStorage.removeItem("userinfo");
    this.router.navigateByUrl('/');
    
  }

}
