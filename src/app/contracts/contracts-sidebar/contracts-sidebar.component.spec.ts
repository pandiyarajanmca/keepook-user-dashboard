import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsSidebarComponent } from './contracts-sidebar.component';

describe('ContractsSidebarComponent', () => {
  let component: ContractsSidebarComponent;
  let fixture: ComponentFixture<ContractsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
