import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';

import { UserAllContractsComponent } from './user-all-contracts/user-all-contracts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContractsSidebarComponent } from './contracts-sidebar/contracts-sidebar.component';
import { AddContractsComponent } from './add-contracts/add-contracts.component';
import { EditContractsComponent } from './edit-contracts/edit-contracts.component';
import { EditSingleDelegatedComponent } from './edit-single-delegated/edit-single-delegated.component';
import { EditSingleDraftingComponent } from './edit-single-drafting/edit-single-drafting.component';
import { EditSingleExecutedComponent } from './edit-single-executed/edit-single-executed.component';
import { EditSinglePendingExecutionComponent } from './edit-single-pending-execution/edit-single-pending-execution.component';
import { UserManageDelegatedComponent } from './user-manage-delegated/user-manage-delegated.component';
import { UserManageExecutedComponent } from './user-manage-executed/user-manage-executed.component';
import { UserManagePendingExecutionComponent } from './user-manage-pending-execution/user-manage-pending-execution.component';


@NgModule({
  declarations: [UserAllContractsComponent, LandingPageComponent, ContractsSidebarComponent, AddContractsComponent, EditContractsComponent, EditSingleDelegatedComponent, EditSingleDraftingComponent, EditSingleExecutedComponent, EditSinglePendingExecutionComponent, UserManageDelegatedComponent, UserManageExecutedComponent, UserManagePendingExecutionComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule,

  ]
})
export class ContractsModule { }