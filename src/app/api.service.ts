import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './model/LoginResultModel'
import { RegisterModel } from './model/RegisterModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    //alert("Apiser const");
  }

  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('api/Main/Login', {
      Username: email,
      password: password
    });
  }

  register(user :RegisterModel):any{
    return this.http.post('api/user/register', user);
  }

  getUserData(){
    return this.http.get('api/user/GetUserList');
  }

  getInvokanaClaims(){
    return this.http.get('api/user/GetInvokanaClaims');
  }
}
