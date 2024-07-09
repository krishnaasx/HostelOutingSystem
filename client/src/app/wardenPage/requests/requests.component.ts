import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { WardenAccountService } from "src/app/_services/warden-account.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})

export class RequestsComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {}

}
