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
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ContractsRoutingModule { }
