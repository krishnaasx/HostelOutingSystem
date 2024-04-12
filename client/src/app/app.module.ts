import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentMatTableComponentComponent } from "./wardenPage/student-mat-table-component/student-mat-table-component.component";
import { StudentRegistrationPageComponent } from './studentPage/student-registration-page/student-registration-page.component';
import { StudentLoginPageComponent } from './studentPage/student-login-page/student-login-page.component';
import { WardenRegistrationPageComponent } from './wardenPage/warden-registration-page/warden-registration-page.component';
import { WardenLoginPageComponent } from './wardenPage/warden-login-page/warden-login-page.component';
import { FormsModule } from "@angular/forms";
import { SeekingPermissionComponent } from './studentPage/seeking-permission/seeking-permission.component';
import { RequestsComponent } from './wardenPage/requests/requests.component';

@NgModule({
  
  declarations: [
    AppComponent,
    StudentMatTableComponentComponent,
    StudentRegistrationPageComponent,
    StudentLoginPageComponent,
    WardenRegistrationPageComponent,
    WardenLoginPageComponent,
    SeekingPermissionComponent,
    RequestsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
