import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
// import { BehaviorSubject, map } from "rxjs";
// import { Student } from "../_models/student";

@Injectable({
  providedIn: 'root'
})

export class StudentAccountService {

  baseUrl = 'https://localhost:5208/api/';
  // private currentUserSource = new BehaviorSubject<Student | null>(null);
  // currentUser$ = this.currentUserSource.asObservable();

  constructor(private http : HttpClient) {

  }

  login(model : any){
     return this.http.post(this.baseUrl + 'students/login' , model);
     
    //.pipe(
    //   map((response: Student) => {
    //     const student = response;
    //     if(student) {
    //       localStorage.setItem('student',JSON.stringify(student));
    //       this.currentUserSource.next(student);
    //     }
    //   })
    // )
  }

  // logout(){
  //   localStorage.removeItem('student');
  //   this.currentUserSource.next(null);
  // }


  request(model : any){
    return this.http.post(this.baseUrl + 'requests/getPermission', model);
  }
}
