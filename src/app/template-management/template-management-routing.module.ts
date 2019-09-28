import { TemplateAllDelegatedComponent } from './template/template-all-delegated/template-all-delegated.component';
import { TemplateAllExpiredComponent } from './template/template-all-expired/template-all-expired.component';
import { TemplateAllPublishedComponent } from './template/template-all-published/template-all-published.component';
import { AllTemplateComponent } from './template/all-template/all-template.component';
import { TemplateEditSinglePublishedComponent } from './template/template-edit-single-published/template-edit-single-published.component';
import { TemplateEditSinglePendingComponent } from './template/template-edit-single-pending/template-edit-single-pending.component';
import { TemplateEditDelegatorComponent } from './template/template-edit-delegator/template-edit-delegator.component';
import { TemplateEditComponent } from './template/template-edit/template-edit.component';
import { TemplateHistoryComponent } from './template/template-history/template-history.component';
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
  { path: 'template-history', component: TemplateHistoryComponent },
  { path: 'template-edit', component: TemplateEditComponent },
  { path: 'template-edit-delegator', component: TemplateEditDelegatorComponent },
  { path: 'template-edit-single-pending', component: TemplateEditSinglePendingComponent },
  { path: 'template-edit-single-published', component: TemplateEditSinglePublishedComponent },
  { path: 'template-all', component: AllTemplateComponent },
  { path: 'template-all-delegated', component: TemplateAllDelegatedComponent },
  { path: 'template-all-expired', component: TemplateAllExpiredComponent },
  { path: 'template-all-published', component: TemplateAllPublishedComponent },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TemplateManagementRoutingModule { }
