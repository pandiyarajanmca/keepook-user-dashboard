import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPublishedComponent } from './all-published.component';

describe('AllPublishedComponent', () => {
  let component: AllPublishedComponent;
  let fixture: ComponentFixture<AllPublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
