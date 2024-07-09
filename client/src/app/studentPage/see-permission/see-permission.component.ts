import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-permission',
  templateUrl: './see-permission.component.html',
  styleUrls: ['./see-permission.component.css']
})
export class SeePermissionComponent implements OnInit{

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  

}
