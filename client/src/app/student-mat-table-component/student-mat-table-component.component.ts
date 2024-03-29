import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-mat-table-component',
  templateUrl: './student-mat-table-component.component.html',
  styleUrls: ['./student-mat-table-component.component.css']
})
export class StudentMatTableComponentComponent implements OnInit {

  studentProfiles : any;
  displayColumns : any [] = ['roomNumber','name','id','phoneNumber','parentPhoneNumber','address','departmentAndCourse'];
  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.http.get('https://localhost:5208/api/profiles').subscribe({
      next: response => this.studentProfiles = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

}
