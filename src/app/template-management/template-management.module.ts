import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { OrganizationComponent } from './organization/organization.component';
import { DepartmentComponent } from './department/department.component';
import { TemplateManagementRoutingModule } from './template-management-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateManagementComponent } from './template-management.component';
import { EntitySidebarComponent } from './entity-sidebar/entity-sidebar.component';
import { EditTemplateComponent } from './template/edit-template/edit-template.component';
import { ViewTemplateComponent } from './template/view-template/view-template.component';
import { EntityService } from '../_serives/entity.service';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CommonModulesModule } from '../common-module/common-module';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { EditOrganizationComponent } from './organization/edit-organization/edit-organization.component';
import { ViewOrganizationComponent } from './organization/view-organization/view-organization.component';
import { ViewUserGroupComponent } from './user-group/view-user-group/view-user-group.component';
import { EditUserGroupComponent } from './user-group/edit-user-group/edit-user-group.component';




@NgModule({
  declarations: [
    TemplateComponent,
    TemplateManagementComponent,
    EditTemplateComponent,
    ViewTemplateComponent,
    UserGroupComponent,
    OrganizationComponent,
    DepartmentComponent,
    EntitySidebarComponent,
    EditDepartmentComponent,
    ViewDepartmentComponent,
    EditOrganizationComponent,
    ViewOrganizationComponent,
    EditUserGroupComponent,
    ViewUserGroupComponent,
    DepartmentComponent
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



