import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllContractsComponent } from './user-all-contracts.component';

describe('UserAllContractsComponent', () => {
  let component: UserAllContractsComponent;
  let fixture: ComponentFixture<UserAllContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAllContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
