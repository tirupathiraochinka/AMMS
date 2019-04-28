import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule, PlatformLocation } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { Router, RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';
import { NeedAuthGuard } from '../auth.guard';
import { LoginPageComponent } from '../login-page/login-page.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UserlistComponent } from './userlist/userlist.component';
import { InvokanaclaimsComponent } from './invokanaclaims/invokanaclaims.component';

const routes: Routes = [
  {
      path: 'dashboard',
      component: DashboardPageComponent,
      children: [
          {
              path: 'userregistration',
              component: UserregistrationComponent
          },
          {
            path: 'userlist',
            component: UserlistComponent
        },
        {
          path: 'invokanaclaims',
          component: InvokanaclaimsComponent
      }
      ]
  },
  // {
  //     path: 'dashboard/userregistration',
  //     component: UserregistrationComponent,
  //     // canActivate: [RoleGuard],
  //     // data: {
  //     //     title: ['MDTHINK - Saved Intakes'],
  //     //     desc: 'Maryland department of human services',
  //     //     screen: { current: 'new', modules: [], skip: false }
  //     // }
  // }
];
const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
@NgModule({
  
  imports: [
    CommonModule,RouterModule.forRoot(routes),ReactiveFormsModule,
    ToastrModule.forRoot({maxOpened:1,preventDuplicates: true}),
  ],
  declarations: [DashboardPageComponent, UserregistrationComponent, UserlistComponent, InvokanaclaimsComponent],
  exports: [
    DashboardPageComponent,
  ],
  providers: [
    NeedAuthGuard,
    // {
    //     provide: externalUrlProvider,
    //     useValue: (route: ActivatedRouteSnapshot) => {
    //         const externalUrl = route.paramMap.get('externalUrl');
    //         window.open(externalUrl, '_blank');
    //     },
    // },
],

  // providers: [
  //   NeedAuthGuard
  // ],
})
export class DashboardPageModule { 
  constructor(location: PlatformLocation, private router: Router) {
    location.onPopState(() => {
      console.log("pressed back in add!!!!!");
      this.router.navigateByUrl('/dashboard');
      //history.forward();
      });

    
  }
}
