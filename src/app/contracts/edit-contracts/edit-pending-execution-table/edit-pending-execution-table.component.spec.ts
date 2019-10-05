import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPendingExecutionTableComponent } from './edit-pending-execution-table.component';

describe('EditPendingExecutionTableComponent', () => {
  let component: EditPendingExecutionTableComponent;
  let fixture: ComponentFixture<EditPendingExecutionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPendingExecutionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPendingExecutionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
