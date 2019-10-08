import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRoutingModule } from './smart-template-routing.module';
import { SmartTemplateComponent } from './smart-template.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SmartSidebarComponent } from './smart-sidebar/smart-sidebar.component';
import { ViewSmartComponent } from './view-smart/view-smart.component';
import { EditSmartComponent } from './edit-smart/edit-smart.component';

import { AccessService } from '../_serives/access.service';
import { AddSmartComponent} from './add-smart/add-smart.component';
import { EditSingleComponent } from './edit-single/edit-single.component';
import { ViewLegalTreeComponent } from './view-legal-tree/view-legal-tree.component';
import { ViewSingleComponent } from './view-single/view-single.component';
import { CreateStep1Component } from './create-step1/create-step1.component';
import { CreateStep2Component } from './create-step2/create-step2.component';
import { CreateStep3Component } from './create-step3/create-step3.component'





@NgModule({
  declarations: [
    SmartTemplateComponent,
    SmartSidebarComponent,
    EditSmartComponent,
    ViewSmartComponent,
    
    AddSmartComponent,
    
    EditSingleComponent,
    
    ViewLegalTreeComponent,
    
    ViewSingleComponent,
    
    CreateStep1Component,
    
    CreateStep2Component,
    
    CreateStep3Component
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
