import { EditSingleDraftingComponent } from './edit-single-drafting/edit-single-drafting.component';
import { UserManagePendingExecutionComponent } from './user-manage-pending-execution/user-manage-pending-execution.component';
import { UserManageExecutedComponent } from './user-manage-executed/user-manage-executed.component';
import { UserManageDelegatedComponent } from './user-manage-delegated/user-manage-delegated.component';
import { EditSinglePendingExecutionComponent } from './edit-single-pending-execution/edit-single-pending-execution.component';
import { EditSingleExecutedComponent } from './edit-single-executed/edit-single-executed.component';
import { EditSingleDelegatedComponent } from './edit-single-delegated/edit-single-delegated.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserAllContractsComponent } from './user-all-contracts/user-all-contracts.component';
import { AddContractsComponent } from './add-contracts/add-contracts.component';
import { EditContractsComponent } from './edit-contracts/edit-contracts.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {path:'user-all-contracts', component:UserAllContractsComponent},
  {path:'add-contracts', component:AddContractsComponent},
  {path:'edit-contracts', component:EditContractsComponent},
  {path:'all-contracts', component:UserAllContractsComponent},
  {path:'edit-sigle-delegate', component:EditSingleDelegatedComponent},
  {path:'edit-sigle-executed', component:EditSingleExecutedComponent},
  {path:'edit-sigle-drafting', component:EditSingleDraftingComponent},
  {path:'edit-sigle-pending-execution', component:EditSinglePendingExecutionComponent},
  {path:'user-manage-delegated', component:UserManageDelegatedComponent},
  {path:'user-manage-executed', component:UserManageExecutedComponent},
  {path:'user-manage-pending-execution', component:UserManagePendingExecutionComponent},


];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ContractsRoutingModule { }
