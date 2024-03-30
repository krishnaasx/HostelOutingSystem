import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentMatTableComponentComponent } from "./student-mat-table-component/student-mat-table-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'Online Hostel Outing App';

  @ViewChild(StudentMatTableComponentComponent , { static:true })
  private studentComponent !: StudentMatTableComponentComponent; //'!' (definite assignment assertion operator)

  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.studentComponent.getMethod();
  }
  
}
