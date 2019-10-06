import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageExecutedComponent } from './user-manage-executed.component';

describe('UserManageExecutedComponent', () => {
  let component: UserManageExecutedComponent;
  let fixture: ComponentFixture<UserManageExecutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManageExecutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManageExecutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
