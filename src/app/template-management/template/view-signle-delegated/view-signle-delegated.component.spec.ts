import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSignleDelegatedComponent } from './view-signle-delegated.component';

describe('ViewSignleDelegatedComponent', () => {
  let component: ViewSignleDelegatedComponent;
  let fixture: ComponentFixture<ViewSignleDelegatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSignleDelegatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSignleDelegatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
