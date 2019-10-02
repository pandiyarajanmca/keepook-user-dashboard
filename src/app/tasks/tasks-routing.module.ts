import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksLandingPageComponent } from './tasks-landing-page/tasks-landing-page.component';

const routes: Routes = [
  {path:"",component:TasksLandingPageComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TasksRoutingModule { }
