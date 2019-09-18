import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSmartComponent } from './view-smart.component';

describe('ViewSmartComponent', () => {
  let component: ViewSmartComponent;
  let fixture: ComponentFixture<ViewSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
