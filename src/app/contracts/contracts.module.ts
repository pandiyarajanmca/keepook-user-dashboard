import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';

import { UserAllContractsComponent } from './user-all-contracts/user-all-contracts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContractsSidebarComponent } from './contracts-sidebar/contracts-sidebar.component';
import { AddContractsComponent } from './add-contracts/add-contracts.component';
import { EditContractsComponent } from './edit-contracts/edit-contracts.component';
import { EditDraftingComponent } from './edit-contracts/edit-drafting/edit-drafting.component';
import { EditExecuteComponent } from './edit-contracts/edit-execute/edit-execute.component';
import { EditPendingExecutionComponent } from './edit-contracts/edit-pending-execution/edit-pending-execution.component';
import { EditDelegatedComponent } from './edit-contracts/edit-delegated/edit-delegated.component';
import { EditExecutedTableComponent } from './edit-contracts/edit-executed-table/edit-executed-table.component';
import { EditPendingExecutionTableComponent } from './edit-contracts/edit-pending-execution-table/edit-pending-execution-table.component';
import { EditDelegatedTableComponent } from './edit-contracts/edit-delegated-table/edit-delegated-table.component';


@NgModule({
  declarations: [UserAllContractsComponent, LandingPageComponent, ContractsSidebarComponent, AddContractsComponent, EditContractsComponent, EditDraftingComponent, EditExecuteComponent, EditPendingExecutionComponent, EditDelegatedComponent, EditExecutedTableComponent, EditPendingExecutionTableComponent, EditDelegatedTableComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule,

  ]
})
export class ContractsModule { }
