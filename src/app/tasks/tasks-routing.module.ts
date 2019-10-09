import { ViewTaskComponent } from './view-task/view-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksLandingPageComponent } from './tasks-landing-page/tasks-landing-page.component';

const routes: Routes = [
  {path:"",component:TasksLandingPageComponent},
  {path:"add-task",component:AddTaskComponent},
  {path:"edit-task",component:EditTaskComponent},
  {path:"view-task",component:ViewTaskComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TasksRoutingModule { }
