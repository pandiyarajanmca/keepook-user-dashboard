import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartTemplateComponent } from './smart-template.component';
import {AddSmartComponent} from './add-smart/add-smart.component'


import { ViewUsersComponent } from './view-users/view-users.component';



const routes: Routes = [
  { path: '', component: SmartTemplateComponent },
  {path:'add-smart', component: AddSmartComponent},
  
  
  { path: 'edit-view-users', component: ViewUsersComponent },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes),]
})
export class AccessRoutingModule { }
