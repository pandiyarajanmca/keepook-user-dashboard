import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSinglePendingComponent } from './view-single-pending.component';

describe('ViewSinglePendingComponent', () => {
  let component: ViewSinglePendingComponent;
  let fixture: ComponentFixture<ViewSinglePendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSinglePendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSinglePendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
