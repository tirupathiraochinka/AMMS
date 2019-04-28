import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-invokanaclaims',
  templateUrl: './invokanaclaims.component.html',
  styleUrls: ['./invokanaclaims.component.css']
})
export class InvokanaclaimsComponent implements OnInit {

  userlist:any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.userlist=null;
    this.getUserData();
  }

  getUserData() {
    
    // stop here if form is invalid
    this.api.getInvokanaClaims()
    .subscribe(result => {
      this.userlist=result;
    });
  }

}
