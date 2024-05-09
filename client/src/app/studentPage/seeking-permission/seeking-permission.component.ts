import { Component, OnInit } from '@angular/core';
import { StudentAccountService } from "src/app/_services/student-account.service";

@Component({
  selector: 'app-seeking-permission',
  templateUrl: './seeking-permission.component.html',
  styleUrls: ['./seeking-permission.component.css']
})
export class SeekingPermissionComponent implements OnInit{

  model : any = {}

  constructor(private studentAccountService : StudentAccountService) { }

  ngOnInit(): void { }
  
  request(){
    this.studentAccountService.request(this.model).subscribe({
      next: response => {
        console.log(response)
      },
      error: error => console.log(error)
    })
  }

}
