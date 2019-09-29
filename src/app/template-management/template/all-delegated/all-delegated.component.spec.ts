import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDelegatedComponent } from './all-delegated.component';

describe('AllDelegatedComponent', () => {
  let component: AllDelegatedComponent;
  let fixture: ComponentFixture<AllDelegatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDelegatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDelegatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
