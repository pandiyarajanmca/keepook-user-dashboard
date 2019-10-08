import { CreateStep3Component } from './create-step3/create-step3.component';
import { CreateStep2Component } from './create-step2/create-step2.component';
import { CreateStep1Component } from './create-step1/create-step1.component';
import { ViewLegalTreeComponent } from './view-legal-tree/view-legal-tree.component';
import { ViewSingleComponent } from './view-single/view-single.component';
import { EditSingleComponent } from './edit-single/edit-single.component';
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
  { path: 'edit-single', component: EditSingleComponent },
  { path: 'view-single', component: ViewSingleComponent },
  { path: 'view-tree', component: ViewLegalTreeComponent },
  { path: 'step1', component: CreateStep1Component },
  { path: 'step2', component: CreateStep2Component },
  { path: 'step3', component: CreateStep3Component },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes),]
})
export class AccessRoutingModule { }
