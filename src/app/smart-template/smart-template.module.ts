import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRoutingModule } from './smart-template-routing.module';
import { SmartTemplateComponent } from './smart-template.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SmartSidebarComponent } from './smart-sidebar/smart-sidebar.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';

import { AccessService } from '../_serives/access.service';
import { AddSmartComponent} from './add-smart/add-smart.component'





@NgModule({
  declarations: [
    SmartTemplateComponent,
    SmartSidebarComponent,
    EditUsersComponent,
    ViewUsersComponent,
    
    AddSmartComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    AccessService
  ]
})
export class SmartTemplateModule { }
