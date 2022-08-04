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
