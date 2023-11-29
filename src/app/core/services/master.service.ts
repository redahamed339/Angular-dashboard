import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { myConstant } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private api: string = '';
  constructor(private http: HttpClient) {
    this.api = environment.api;
   }

  get() : Observable<any[]> {
    return this.http.get<any[]>(this.api +
       myConstant.apiMethodName.allRequest);
  }

  createFullname(fname:string,mname:string,lname:string){
    return fname+ " "+ mname + " "+ lname;
  }
}
