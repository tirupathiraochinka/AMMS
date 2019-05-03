import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { DataAccessService } from 'src/app/services/data-access.service';
import { ToastrService } from 'ngx-toastr';
import { LoginPageComponent } from '../login-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private customer: CustomerService,location: PlatformLocation, private router: Router,
    private formBuilder: FormBuilder,private dataAccess :DataAccessService,
    private toastr: ToastrService) {
      if(localStorage.getItem("TOKEN") && localStorage.getItem("TOKEN")!=null){
      location.onPopState(() => {
      console.log("pressed back in add!!!!!");
      this.router.navigateByUrl('/dashboard');
      history.forward();
      });
    }
    else{
      this.router.navigateByUrl('/login');
    }

    
  }
  
  tryLogin() {
    console.log(this.login.value)
    this.api.login(
      this.login.value.Username,
      this.login.value.Password
    )
      .subscribe(
        r => {
          if (r!=null && r.token) {
            localStorage.setItem("userinfo",JSON.stringify(r));
            this.dataAccess.changeMessage(JSON.stringify(r));
            this.customer.setToken(r.token);
            this.router.navigate(['/dashboard/home']);
          }
          else{
            this.toastr.error('Oops!....', 'Invalid Credentials');
          }
        },
        r => {
          this.toastr.error('Oops!....', 'Sory Some went Wrong, please try later');
        });
  }


  login: FormGroup;
  submitted = false;
  userInfo:any;
  public minDate: Date = new Date ();



  ngOnInit() {
    LoginPageComponent.moduleName="Login";
    this.login = this.formBuilder.group({
      Username : ['', Validators.required],
      Password : ['', Validators.required],
    }, );

    

}


 // convenience getter for easy access to form fields
 get f() { return this.login.controls; }



}
