import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';

import { UserAllContractsComponent } from './user-all-contracts/user-all-contracts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContractsSidebarComponent } from './contracts-sidebar/contracts-sidebar.component';
import { AddContractsComponent } from './add-contracts/add-contracts.component';
import { EditContractsComponent } from './edit-contracts/edit-contracts.component';


@NgModule({
  declarations: [UserAllContractsComponent, LandingPageComponent, ContractsSidebarComponent, AddContractsComponent, EditContractsComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule,

  ]
})
export class ContractsModule { }
