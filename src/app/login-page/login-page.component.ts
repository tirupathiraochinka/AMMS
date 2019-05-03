import {Component} from '@angular/core';
import {ApiService} from '../api.service';
import {CustomerService} from '../customer.service';
import {Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataAccessService } from '../services/data-access.service';
import { ToastrService } from 'ngx-toastr';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  static isServiceStyle:boolean=false;
  static moduleName:string="Home";
  constructor(private api: ApiService, private customer: CustomerService,location: PlatformLocation, private router: Router,
    private formBuilder: FormBuilder,private dataAccess :DataAccessService,
    private toastr: ToastrService,private cdRef:ChangeDetectorRef) {
    //   if(localStorage.getItem("TOKEN") && localStorage.getItem("TOKEN")!=null){
    //   location.onPopState(() => {
    //   console.log("pressed back in add!!!!!");
    //   this.router.navigateByUrl('/dashboard');
    //   history.forward();
    //   });
    // }
    // else{
    //   this.router.navigateByUrl('/home');
    // }

    this.router.navigateByUrl('/home');
    LoginPageComponent.isServiceStyle=false

    
  }

  ngAfterViewChecked()
{
  this.isService;
  this.modulName;
  console.log("before   "+this.isService)
  this.cdRef.detectChanges();
  console.log("after   "+this.isService);
  window.scrollTo(0, 0)
}

  tryLogin() {

    this.api.login(
      this.login.value.Username,
      this.login.value.Password
    )
      .subscribe(
        r => {
          if (r.token) {
            localStorage.setItem("userinfo",JSON.stringify(r));
            this.dataAccess.changeMessage(JSON.stringify(r));
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/userlist');
          }
        },
        r => {
          alert(r.error.error);
        });
  }


  login: FormGroup;
  submitted = false;
  userInfo:any;
  public minDate: Date = new Date ();

  get isService() {
    return LoginPageComponent.isServiceStyle;
  }

  get modulName() {
    return LoginPageComponent.moduleName;
  }

  ngOnInit() {
    this.login = this.formBuilder.group({
      Username : ['', Validators.required],
      Password : ['', Validators.required],
    }, );

  

}


 // convenience getter for easy access to form fields
 get f() { return this.login.controls; }


 onSubmit() {
  this.submitted = true;
  
  // stop here if form is invalid
  if (this.login.invalid) {
      this.toastr.warning('Warning!...', 'Please enter valid Data');
      return;
  }
  this.dataAccess.createInvokanaForm(this.login.value)
  .subscribe(hero => {this.userInfo=hero;console.log(this.userInfo)});
    // success => {
    //   console.log(Response);
    //   //console.log(res);
    //   //this.toastr.success('Success!....', 'Thank you for registering with us,Your details forwarded to Administration');
    // },
    // error => {
    //   this.toastr.error('Oops!....', 'Sory Some went Wrong, please try later');
    // }
  //);
}

}
