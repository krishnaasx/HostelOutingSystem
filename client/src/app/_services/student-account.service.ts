import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
// import { BehaviorSubject, map } from "rxjs";
// import { Student } from "../_models/student";

@Injectable({
  providedIn: 'root'
})

export class StudentAccountService {

  baseUrl = 'https://localhost:5208/api/';

  constructor(private http : HttpClient) {}

  login(model : any){
     return this.http.post(this.baseUrl + 'students/login' , model);
  }

  request(model : any){
    return this.http.post(this.baseUrl + 'students/getPermission', model);
  }

}
