import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginPageComponent } from "./studentPage/student-login-page/student-login-page.component";
import { WardenLoginPageComponent } from "./wardenPage/warden-login-page/warden-login-page.component";
import { SeekingPermissionComponent } from "./studentPage/seeking-permission/seeking-permission.component";
import { RequestsComponent } from "./wardenPage/requests/requests.component";
import { StudentMatTableComponentComponent } from "./wardenPage/student-mat-table-component/student-mat-table-component.component";
import { OptionsForWardenComponent } from "./wardenPage/options-for-warden/options-for-warden.component";



const routes: Routes = [
  {path:'student-login-page', component:StudentLoginPageComponent },
  {path:'warden-login-page', component:WardenLoginPageComponent},
  {path:'seeking-permission', component:SeekingPermissionComponent},
  {path:'requests', component:RequestsComponent},
  {path:'studentInfo', component:StudentMatTableComponentComponent},
  {path:'optionsForWarden', component:OptionsForWardenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
