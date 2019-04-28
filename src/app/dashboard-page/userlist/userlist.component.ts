import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/model/RegisterModel';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userlist:any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.userlist=null;
    this.getUserData();
  }

  getUserData() {
    
    // stop here if form is invalid
    this.api.getUserData()
    .subscribe(result => {
      this.userlist=result;
    });
  }

}
