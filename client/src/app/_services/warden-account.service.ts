import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Warden } from "../_models/warden";
import { BehaviorSubject, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WardenAccountService {

  baseUrl = 'https://localhost:5208/api/';
  private currentWardenSource = new BehaviorSubject<Warden | null>(null);
  currentWarden$ = this.currentWardenSource.asObservable();
  
  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post<Warden>(this.baseUrl + 'wardans/login', model).pipe(
      map((response: Warden) =>{
        const warden = response;
        if(warden){
          localStorage.setItem('warden',JSON.stringify(warden));
          this.currentWardenSource.next(warden);
        }
      })
    )
  }

  setCurrentWarden(warden : Warden){
    this.currentWardenSource.next(warden);
  }

  logout(){
    localStorage.removeItem("user");
    this.currentWardenSource.next(null);
  }
}
