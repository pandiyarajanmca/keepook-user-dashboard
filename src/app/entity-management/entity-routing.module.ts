import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EntityManagementComponent } from './entity-management.component';
import { ViewCompanyComponent } from './company/view-company/view-company.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { ViewUserGroupComponent } from './user-group/view-user-group/view-user-group.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
const routes: Routes = [
  { path: '', component: EntityManagementComponent },
  { path: 'add-template', component: CompanyComponent },
  { path: 'view-template', component: ViewCompanyComponent },
  { path: 'edit-template', component: EditCompanyComponent },
  { path: 'edit-view-department', component: ViewDepartmentComponent },
  { path: 'edit-view-user-groups', component: ViewUserGroupComponent },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class EntityRoutingModule { }
