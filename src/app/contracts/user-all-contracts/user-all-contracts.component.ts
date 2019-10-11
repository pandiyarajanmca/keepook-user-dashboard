import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-all-contracts',
  templateUrl: './user-all-contracts.component.html',
  styleUrls: ['./user-all-contracts.component.css']
})
export class UserAllContractsComponent implements OnInit {
  selected: any;
  open: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  //  navigateTo(EditPendingExecuted, EditDelegated) {
  //   if (EditPendingExecuted) {
  //     this.router.navigate(["/contracts/edit-contracts-pending-execute-table"]);
  //   }
  //   else if (EditDelegated) {
  //     this.router.navigate(["/contracts/edit-contracts-delegated-table"]);
  //   }
  //   else {
  //     this.router.navigate(["/user-all-contracts"]);
  //   }

  onClick(item) {
    this.selected = item.value;
    this.open = false;
    switch (this.selected) {
      case "delegated":
        this.router.navigate(["/user-manage-delegated"]);
        break;


    }
  }

}
