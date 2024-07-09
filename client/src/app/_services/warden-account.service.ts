import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WardenAccountService {
  
  baseUrl = 'https://localhost:5208/api/'
  constructor(private http : HttpClient) {

  }

  login(model : any){
    return this.http.post(this.baseUrl + 'wardans/login' , model);
  }

}
