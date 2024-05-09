import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { WardenAccountService } from "src/app/_services/warden-account.service";

@Component({
  selector: 'app-warden-login-page',
  templateUrl: './warden-login-page.component.html',
  styleUrls: ['./warden-login-page.component.css']
})
export class WardenLoginPageComponent implements OnInit{

  model : any = {};
  constructor(private wardenAccountService : WardenAccountService,private router:Router, private toastr:ToastrService) {}
  ngOnInit(): void{

  }

  login(){
    this.wardenAccountService.login(this.model).subscribe({
      next: () => this.router.navigate(['/optionsForWarden']),
      error: error => this.toastr.error(error.error)
    })
  }
}
