import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Online Hostel Outing Application';
  /* studentProfiles : any; */

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    /* this.http.get('https://localhost:5208/api/profiles').subscribe({
      next: response => this.studentProfiles = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    }) */
  }
  
}
