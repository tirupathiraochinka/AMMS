import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { ServicesComponent } from './services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';

const routes: Routes = [
  {
      path: '',
      component: LoginPageComponent,
      children: [
          {
              path: 'login',
              component: LoginComponent
          },
          {
            path: 'home',
            component: HomeComponent
        },
        {
          path: 'aboutcompany',
          component: AboutcompanyComponent
      },
      {
        path: 'services',
        component: ServicesComponent
    },
    {
      path: 'servicedetails/:name',
      component: ServicedetailsComponent
  }
      ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({maxOpened:1,preventDuplicates: true}),
    RouterModule.forRoot(routes,{ useHash: true }),
    BrowserAnimationsModule
  ],
  declarations: [LoginPageComponent, LoginComponent,  HomeComponent, AboutcompanyComponent, ServicesComponent, ServicedetailsComponent],
  exports: [
    LoginPageComponent
  ],
  providers: [
     {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
})
export class LoginPageModule { }
