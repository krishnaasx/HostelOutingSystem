import { Component, OnInit } from '@angular/core';
import { WardenAccountService } from "../../_services/warden-account.service";
import { Observable, of } from "rxjs";
import { Warden } from "src/app/_models/warden";
import { Router } from "@angular/router";

@Component({
  selector: 'app-warden-login-page',
  templateUrl: './warden-login-page.component.html',
  styleUrls: ['./warden-login-page.component.css']
})
export class WardenLoginPageComponent implements OnInit {
  
  model : any = {};
  currentWarden$: Observable<Warden | null> = of(null);
  constructor(private router: Router,private wardenAccountService: WardenAccountService) {}
  ngOnInit(): void {
      this.currentWarden$ = this.wardenAccountService.currentWarden$;
  }

  login(){
    this.wardenAccountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/requests']);
      },
      error: error => console.log(error)
    })
  }

  logout(){
    this.wardenAccountService.logout();
  }
}
