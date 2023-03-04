import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './component/dialog/dialog.component';
import { LoggedContactListComponent } from './component/logged-contact-list/logged-contact-list.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'logged-contact-list', component:LoggedContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
