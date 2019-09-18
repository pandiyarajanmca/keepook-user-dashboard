import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartTemplateComponent } from './smart-template.component';
import {AddSmartComponent} from './add-smart/add-smart.component'


import { ViewSmartComponent } from './view-smart/view-smart.component';



const routes: Routes = [
  { path: '', component: SmartTemplateComponent },
  {path:'add-smart', component: AddSmartComponent},
  
  {path:'edit-smart', component: AddSmartComponent},
  { path: 'view-smart', component: ViewSmartComponent },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes),]
})
export class AccessRoutingModule { }
