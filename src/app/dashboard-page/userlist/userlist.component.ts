import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/model/RegisterModel';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userlist=Array();
  IsNoDataExist:boolean=false;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.userlist=[];
    this.getUserData();
  }

  getUserData() {
    
    // stop here if form is invalid
    this.api.getUserData()
    .subscribe(result => {
      this.userlist=result as Array<Object>;
      if(this.userlist.length<=0){
        this.IsNoDataExist=true;
       }
    });
  }

}
