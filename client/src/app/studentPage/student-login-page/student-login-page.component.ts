import { Component, OnInit } from '@angular/core';
import { StudentAccountService } from "../../_services/student-account.service";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { Student } from "src/app/_models/student";


@Component({
  selector: 'app-student-login-page',
  templateUrl: './student-login-page.component.html',
  styleUrls: ['./student-login-page.component.css']
})

export class StudentLoginPageComponent implements OnInit {

  model : any = {};
  currentStudent$: Observable<Student | null> = of(null);
  constructor(private router: Router,private studentAccountService: StudentAccountService) {}
  ngOnInit(): void {
      this.currentStudent$ = this.studentAccountService.currentStudent$;
  }

  login(){
    this.studentAccountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/seeking-permission']);
      },
      error: error => console.log(error)
    })
  }

  logout(){
    this.studentAccountService.logout();
  }



}
