import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPendingExecutionComponent } from './edit-pending-execution.component';

describe('EditPendingExecutionComponent', () => {
  let component: EditPendingExecutionComponent;
  let fixture: ComponentFixture<EditPendingExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPendingExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPendingExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
