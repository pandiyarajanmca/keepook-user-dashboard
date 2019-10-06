import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSinglePendingExecutionComponent } from './edit-single-pending-execution.component';

describe('EditSinglePendingExecutionComponent', () => {
  let component: EditSinglePendingExecutionComponent;
  let fixture: ComponentFixture<EditSinglePendingExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSinglePendingExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSinglePendingExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
