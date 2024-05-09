import { Location } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit{

  ngOnInit(): void {
    
  }

  constructor(private router:Router,private location: Location){}
  
  redirectTo(route: string) {
    this.router.navigateByUrl(route);
  }

  goBack(){
    this.location.back();
  }
}
