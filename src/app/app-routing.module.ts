import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportingComponent } from './reporting/reporting.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'template-management',
    loadChildren: '../app/template-management/template-management.module#TemplateManagementModule'
  },
  {
    path: 'smart-template',
    loadChildren: '../app/smart-template/smart-template.module#SmartTemplateModule'
  },
  {
    path: 'tasks',
    loadChildren: '../app/tasks/tasks.module#TasksModule'
  },
  {
    path: 'contracts',
    loadChildren: '../app/contracts/contracts.module#ContractsModule'
  },
  {
    path: 'reporting',
    component: ReportingComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }