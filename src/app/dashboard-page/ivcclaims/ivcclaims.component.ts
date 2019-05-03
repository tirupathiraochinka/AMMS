import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-ivcclaims',
  templateUrl: './ivcclaims.component.html',
  styleUrls: ['./ivcclaims.component.css']
})
export class IvcclaimsComponent implements OnInit {

  userlist=Array();
  IsNoDataExist:boolean=false;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.userlist=[];
    this.getUserData();
  }

  getUserData() {
    
    // stop here if form is invalid
    this.api.getInvokanaClaims()
    .subscribe(result => {
      //this.userlist=result as Array<Object>;
      if(this.userlist.length<=0){
        this.IsNoDataExist=true;
      }
    });
  }
}
