import {Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersformService {

  constructor(
    private http: HttpClient,
  ) { }

  postEmploye(user: {uuid:string, name:string, email:string, issue:string, message:string}):Observable<any>{
    return this.http.post<any>('https://jsengine.herokuapp.com/contact/message/send', user)
    .pipe(
      retry(1),
     catchError(this.errorHandeller),
    )
  }

  errorHandeller(error: HttpErrorResponse){
    return throwError(error);
  }

  // getEmployee(){
  //   return this.http.get <any>("http://localhost:3000/posts")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // updateEmployee(data: any, id:number){
  //   return this.http.put<any>("http://localhost:3000/posts/"+id, data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // deleteEmployee(id: number){
  //   return this.http.delete<any>("http://localhost:3000/posts/"+id)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

}
