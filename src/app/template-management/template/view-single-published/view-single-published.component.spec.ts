import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSinglePublishedComponent } from './view-single-published.component';

describe('ViewSinglePublishedComponent', () => {
  let component: ViewSinglePublishedComponent;
  let fixture: ComponentFixture<ViewSinglePublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSinglePublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSinglePublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
