import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagePendingExecutionComponent } from './user-manage-pending-execution.component';

describe('UserManagePendingExecutionComponent', () => {
  let component: UserManagePendingExecutionComponent;
  let fixture: ComponentFixture<UserManagePendingExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagePendingExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagePendingExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
