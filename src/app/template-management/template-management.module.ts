import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { TemplateManagementRoutingModule } from './template-management-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateManagementComponent } from './template-management.component';
import { EntitySidebarComponent } from './entity-sidebar/entity-sidebar.component';
import { EntityService } from '../_serives/entity.service';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CommonModulesModule } from '../common-module/common-module';
import { TemplateHistoryComponent } from './template/template-history/template-history.component';
import { TemplateEditComponent } from './template/template-edit/template-edit.component';
import { TemplateEditDelegatorComponent } from './template/template-edit-delegator/template-edit-delegator.component';
import { TemplateEditSinglePendingComponent } from './template/template-edit-single-pending/template-edit-single-pending.component';
import { TemplateEditSinglePublishedComponent } from './template/template-edit-single-published/template-edit-single-published.component';
import { AllTemplateComponent } from './template/all-template/all-template.component';
import { TemplateAllDelegatedComponent } from './template/template-all-delegated/template-all-delegated.component';
import { TemplateAllExpiredComponent } from './template/template-all-expired/template-all-expired.component';
import { TemplateAllPublishedComponent } from './template/template-all-published/template-all-published.component';
import { ReplaceExistingPendingComponent } from './template/replace-existing-pending/replace-existing-pending.component';
import { ViewSignleDelegatedComponent } from './template/view-signle-delegated/view-signle-delegated.component';
import { ViewSinglePendingComponent } from './template/view-single-pending/view-single-pending.component';
import { ViewSinglePublishedComponent } from './template/view-single-published/view-single-published.component';
import { AllDelegatedComponent } from './template/all-delegated/all-delegated.component';
import { AllExpiredComponent } from './template/all-expired/all-expired.component';
import { AllPublishedComponent } from './template/all-published/all-published.component';

@NgModule({
  declarations: [
    TemplateComponent,
    TemplateManagementComponent,
    EntitySidebarComponent,
    TemplateHistoryComponent,
    TemplateEditComponent,
    TemplateEditDelegatorComponent,
    TemplateEditSinglePendingComponent,
    TemplateEditSinglePublishedComponent,
    AllTemplateComponent,
    TemplateAllDelegatedComponent,
    TemplateAllExpiredComponent,
    TemplateAllPublishedComponent,
    ReplaceExistingPendingComponent,
    ViewSignleDelegatedComponent,
    ViewSinglePendingComponent,
    ViewSinglePublishedComponent,
    AllDelegatedComponent,
    AllExpiredComponent,
    AllPublishedComponent
  ],
  imports: [
    CommonModule,    
    CommonModulesModule,
    TemplateManagementRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFileUploaderModule, 
  ],
  providers:[
    EntityService
  ]
})
export class TemplateManagementModule { }



