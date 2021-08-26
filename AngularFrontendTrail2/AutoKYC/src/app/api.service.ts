import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl="http://127.0.0.1:8000/"
  httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  getAllUserData(): Observable<any>{
    return this.http.get(this.baseurl+'userdataform',
    {headers:this.httpHeaders});
  }
}
