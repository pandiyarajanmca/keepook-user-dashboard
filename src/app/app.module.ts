import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TemplateManagementModule } from './template-management/template-management.module';
import { TasksModule } from './tasks/tasks.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { SmartTemplateModule } from './smart-template/smart-template.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReportingComponent } from './reporting/reporting.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_serives/auth.service';
import { ChartComponent } from './dashboard/chart/chart.component';
import { CommonModulesModule } from './common-module/common-module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService} from './_serives/http.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccessService } from './_serives/access.service';
import { ContractsModule } from './contracts/contracts.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    ReportingComponent,    
    LoginComponent,
    ChartComponent ,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateManagementModule,
    ContractsModule, 
    SmartTemplateModule,
    
    FormsModule, 
    ReactiveFormsModule,
    CommonModulesModule,
    HttpClientModule,  
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    NgbModule,
    TasksModule
     

  ],
  providers: [AuthService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
