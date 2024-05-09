import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-options-for-warden',
  templateUrl: './options-for-warden.component.html',
  styleUrls: ['./options-for-warden.component.css']
})
export class OptionsForWardenComponent implements OnInit{

  ngOnInit(): void { }
  constructor (private route:Router) { }

  redirectTo(route : string){
    this.route.navigateByUrl(route);
  }

}
