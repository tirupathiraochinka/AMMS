import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Request-Headers': 'content-type',
'Access-Control-Request-Method': 'POST',
'Origin': 'http://invokana-claim.com',
'Referer': 'http://invokana-claim.com/'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private client: HttpClient) { }

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  createInvokanaForm(invokanaModel: any){
    return this.client.post('api/Main/PostInvokanObj', invokanaModel,httpOptions);
  }
}
