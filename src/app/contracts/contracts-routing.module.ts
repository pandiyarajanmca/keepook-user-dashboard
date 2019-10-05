import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserAllContractsComponent } from './user-all-contracts/user-all-contracts.component';
import { AddContractsComponent } from './add-contracts/add-contracts.component';
import { EditContractsComponent } from './edit-contracts/edit-contracts.component';
import { EditDelegatedComponent } from './edit-contracts/edit-delegated/edit-delegated.component';
import { EditDelegatedTableComponent } from './edit-contracts/edit-delegated-table/edit-delegated-table.component';
import { EditDraftingComponent } from './edit-contracts/edit-drafting/edit-drafting.component';
import { EditExecuteComponent } from './edit-contracts/edit-execute/edit-execute.component';
import { EditPendingExecutionTableComponent } from './edit-contracts/edit-pending-execution-table/edit-pending-execution-table.component';
import { EditPendingExecutionComponent } from './edit-contracts/edit-pending-execution/edit-pending-execution.component';
import { EditExecutedTableComponent } from './edit-contracts/edit-executed-table/edit-executed-table.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'user-all-contracts', component: UserAllContractsComponent },
  { path: 'add-contracts', component: AddContractsComponent },
  { path: 'edit-contracts', component: EditContractsComponent },
  { path: 'edit-contracts-delegated', component: EditDelegatedComponent },
  { path: 'edit-contracts-delegated-table', component: EditDelegatedTableComponent },
  { path: "edit-contracts-drafting", component: EditDraftingComponent },
  { path: "edit-contracts-execute", component: EditExecuteComponent },
  { path: "edit-contracts-execute-table", component: EditExecutedTableComponent },
  { path: 'edit-contracts-pending-execute', component: EditPendingExecutionComponent },
  { path: 'edit-contracts-pending-execute-table', component: EditPendingExecutionTableComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ContractsRoutingModule { }
