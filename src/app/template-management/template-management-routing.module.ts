import { AllPublishedComponent } from './template/all-published/all-published.component';
import { AllExpiredComponent } from './template/all-expired/all-expired.component';
import { AllDelegatedComponent } from './template/all-delegated/all-delegated.component';
import { ViewSinglePublishedComponent } from './template/view-single-published/view-single-published.component';
import { ViewSinglePendingComponent } from './template/view-single-pending/view-single-pending.component';
import { ViewSignleDelegatedComponent } from './template/view-signle-delegated/view-signle-delegated.component';
import { ReplaceExistingPendingComponent } from './template/replace-existing-pending/replace-existing-pending.component';
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
import { TemplateManagementComponent } from './template-management.component';
import { TemplateComponent } from './template/template.component'
const routes: Routes = [
  { path: '', component: TemplateManagementComponent },
  { path: 'add-template', component: TemplateComponent },
  { path: 'template-history', component: TemplateHistoryComponent },
  { path: 'edit-template', component: TemplateEditComponent },
  { path: 'edit-delegator-template', component: TemplateEditDelegatorComponent },
  { path: 'edit-single-pending-template', component: TemplateEditSinglePendingComponent },
  { path: 'edit-single-published-template', component: TemplateEditSinglePublishedComponent },
  { path: 'view-all-template', component: AllTemplateComponent },
  { path: 'view-all-delegated-template-', component: TemplateAllDelegatedComponent },
  { path: 'view-all-expired-template-', component: TemplateAllExpiredComponent },
  { path: 'view-all-published-template', component: TemplateAllPublishedComponent },
  { path: 'exist-pending', component: ReplaceExistingPendingComponent },
  { path: 'view-delegate', component: ViewSignleDelegatedComponent },
  { path: 'view-pending', component: ViewSinglePendingComponent },
  { path: 'view-published', component: ViewSinglePublishedComponent },
  { path: 'all-delegated', component: AllDelegatedComponent },
  { path: 'all-expired', component: AllExpiredComponent },
  { path: 'all-published', component: AllPublishedComponent },

  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TemplateManagementRoutingModule { }
