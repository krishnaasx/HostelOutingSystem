import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from "rxjs";
import { Student } from "../_models/student";

@Injectable({
  providedIn: 'root'
})

export class StudentAccountService {

  baseUrl = 'https://localhost:5208/api/';
  private currentStudentSource = new BehaviorSubject<Student | null>(null);
  currentStudent$ = this.currentStudentSource.asObservable();
  
  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post<Student>(this.baseUrl + 'students/login', model).pipe(
      map((response: Student) =>{
        const student = response;
        if(student){
          localStorage.setItem('student',JSON.stringify(student));
          this.currentStudentSource.next(student);
        }
      })
    )
  }

  setCurrentStudent(student : Student){
    this.currentStudentSource.next(student);
  }

  logout(){
    localStorage.removeItem("user");
    this.currentStudentSource.next(null);
  }
}
