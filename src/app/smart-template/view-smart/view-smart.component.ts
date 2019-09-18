import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityService } from 'src/app/_serives/entity.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-smart',
  templateUrl: './view-smart.component.html',
  styleUrls: ['./view-smart.component.css']
})
export class ViewSmartComponent implements OnInit {
  usersList: any;
  editRecord: any;
  constructor(
    private accessService: EntityService,
    private _location: Location
    ) { }

  ngOnInit() {
    this.getusers();
    
  }
  goBack() {
    this._location.back();
  }

  getusers() {
    // this.entityService.getAllUsers().subscribe(res => {
    //   if (res['statusCode'] == 202) {
    //     this.usersList = res['data']['companies'];
    //   }
    // }, err => {

    // });
  }
}