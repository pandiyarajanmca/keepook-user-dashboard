import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksLandingPageComponent } from './tasks-landing-page/tasks-landing-page.component';


@NgModule({
  declarations: [
  TasksLandingPageComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFileUploaderModule
  ]
})
export class TasksModule { }
