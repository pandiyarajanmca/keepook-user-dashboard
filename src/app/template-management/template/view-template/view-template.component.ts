import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityService } from 'src/app/_serives/entity.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.css']
})
export class ViewTemplateComponent implements OnInit {
  templateList: any;
  editRecord: any;
  companyList: any;
  constructor(private entityService: EntityService,
    private _location: Location) { }

  ngOnInit() {
    this.gettemplate();
  }
  goBack() {
    this._location.back();
  }

  gettemplate() {
    this.entityService.getAllCompany().subscribe(res => {
      if (res['statusCode'] == 202) {
        this.companyList = res['data']['companies'];
      }
    }, err => {

    });
  }
}