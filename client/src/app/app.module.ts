import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentMatTableComponentComponent } from "./student-mat-table-component/student-mat-table-component.component";


@NgModule({
  declarations: [
    AppComponent,
    StudentMatTableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
