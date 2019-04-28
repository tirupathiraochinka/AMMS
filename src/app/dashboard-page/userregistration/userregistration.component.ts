import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  register: FormGroup;
response:any;
submitted:boolean=false;
  constructor(private api: ApiService,location: PlatformLocation, private router: Router,
    private formBuilder: FormBuilder,private toastr: ToastrService) {
      if(localStorage.getItem("TOKEN")!=null){
      location.onPopState(() => {
      this.router.navigateByUrl('/dashboard');
      history.forward();
      });
    }
    else{
      this.router.navigateByUrl('/');
    }

    
  }


  ngOnInit() {
    this.register = this.formBuilder.group({
      Id : ['',],
      Name : ['', Validators.required],
      EmailId : ['', Validators.required],
      MobileNo : ['', Validators.required],
      Status : ['',],
      IsActive : ['', ],
      UserName:['',]
    }, );
  }

  get f() { return this.register.controls; }
  registerUser() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.register.invalid) {
        this.toastr.warning('Warning!...', 'Please enter valid Data');
        return;
    }
    this.api.register(this.register.value)
    .subscribe(result => {
      this.response=result;
      if(this.response){
        this.toastr.success('Success!....', 'User Registration Successfully');
      }
      else{
        this.toastr.error('Oops!....', 'Sory Something went Wrong, please try later');
      }

    });
  }
}
