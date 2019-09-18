import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTemplateComponent } from './template/view-template/view-template.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { ViewUserGroupComponent } from './user-group/view-user-group/view-user-group.component';
import { EditTemplateComponent } from './template/edit-template/edit-template.component';
import { TemplateManagementComponent } from './template-management.component';
import { TemplateComponent } from './template/template.component'
const routes: Routes = [
  { path: '', component: TemplateManagementComponent },
  { path: 'add-template', component: TemplateComponent },
  { path: 'view-template', component: ViewTemplateComponent },
  { path: 'edit-template', component: EditTemplateComponent },
  { path: 'edit-view-department', component: ViewDepartmentComponent },
  { path: 'edit-view-user-groups', component: ViewUserGroupComponent },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TemplateManagementRoutingModule { }
