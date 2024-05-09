import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentMatTableComponentComponent } from "./wardenPage/student-mat-table-component/student-mat-table-component.component";
import { StudentLoginPageComponent } from './studentPage/student-login-page/student-login-page.component';
import { WardenLoginPageComponent } from './wardenPage/warden-login-page/warden-login-page.component';
import { FormsModule } from "@angular/forms";
import { SeekingPermissionComponent } from './studentPage/seeking-permission/seeking-permission.component';
import { RequestsComponent } from './wardenPage/requests/requests.component';
import { OptionsComponent } from './options/options.component';
import { OptionsForWardenComponent } from './wardenPage/options-for-warden/options-for-warden.component';
import { ToastrModule } from "ngx-toastr";

@NgModule({
  
  declarations: [
    AppComponent,
    StudentMatTableComponentComponent,
    StudentLoginPageComponent,
    WardenLoginPageComponent,
    SeekingPermissionComponent,
    RequestsComponent,
    OptionsComponent,
    OptionsForWardenComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
