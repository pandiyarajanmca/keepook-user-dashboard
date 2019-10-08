import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractsComponent } from './edit-contracts.component';

describe('EditContractsComponent', () => {
  let component: EditContractsComponent;
  let fixture: ComponentFixture<EditContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
