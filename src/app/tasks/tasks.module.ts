import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksLandingPageComponent } from './tasks-landing-page/tasks-landing-page.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskSidbarComponent } from './task-sidbar/task-sidbar.component';


@NgModule({
  declarations: [
  TasksLandingPageComponent,
  AddTaskComponent,
  ViewTaskComponent,
  EditTaskComponent,
  TaskSidbarComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFileUploaderModule
  ]
})
export class TasksModule { }
