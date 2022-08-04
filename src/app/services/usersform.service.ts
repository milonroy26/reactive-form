import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserCreate } from '../interfaces/Auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersformService {

  constructor(
    private http: HttpClient,
  ) { }
  
  postMessage(message: IUserCreate):Observable<any>{
    return this.http.post<any>('https://jsengine.herokuapp.com/contact/message/send', message);
  }
}
