import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { StudentAccountService } from "src/app/_services/student-account.service";

@Component({
  selector: 'app-student-login-page',
  templateUrl: './student-login-page.component.html',
  styleUrls: ['./student-login-page.component.css']
})

export class StudentLoginPageComponent implements OnInit{

  model : any = {};
  loggedIn = false;
  constructor(private studentAccountService : StudentAccountService,private router:Router, private toastr:ToastrService) {}
  ngOnInit(): void{

  }

  login(){
    this.studentAccountService.login(this.model).subscribe({
      next:() => this.router.navigate(['/seeking-permission']),
      error: error => this.toastr.error(error.error)
    })
  }
}
