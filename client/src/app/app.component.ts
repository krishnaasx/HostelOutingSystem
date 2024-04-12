import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentMatTableComponentComponent } from "./wardenPage/student-mat-table-component/student-mat-table-component.component";
import { Router } from "@angular/router";
import { StudentLoginPageComponent } from "./studentPage/student-login-page/student-login-page.component";
import { Student } from "./_models/student";
import { StudentAccountService } from "./_services/student-account.service";
import { WardenAccountService } from "./_services/warden-account.service";
import { Warden } from "./_models/warden";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'Hostel Outing App';
  
  constructor(private http: HttpClient, private router: Router, private studentAccountService: StudentAccountService, private wardenAccountService: WardenAccountService){ }

  ngOnInit(): void { 
    this.setCurrentStudent();
    this.setCurrentWarden();
  }

  goToStudentLogin(){
    
    this.router.navigate(['/student-login-page']);
    
  }

  goToWardenLogin(){
    this.router.navigate(['/warden-login-page']);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  setCurrentStudent(){
    const studentString  = localStorage.getItem('student');
    if(!studentString) return;
    const student: Student = JSON.parse(studentString);
    this.studentAccountService.setCurrentStudent(student);
  }

  setCurrentWarden(){
    const wardenString  = localStorage.getItem('warden');
    if(!wardenString) return;
    const warden: Warden = JSON.parse(wardenString);
    this.wardenAccountService.setCurrentWarden(warden);
  }

}
