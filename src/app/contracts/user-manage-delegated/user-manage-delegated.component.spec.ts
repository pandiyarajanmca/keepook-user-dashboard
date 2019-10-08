import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageDelegatedComponent } from './user-manage-delegated.component';

describe('UserManageDelegatedComponent', () => {
  let component: UserManageDelegatedComponent;
  let fixture: ComponentFixture<UserManageDelegatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManageDelegatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManageDelegatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
