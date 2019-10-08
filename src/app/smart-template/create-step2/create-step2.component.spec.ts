import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStep2Component } from './create-step2.component';

describe('CreateStep2Component', () => {
  let component: CreateStep2Component;
  let fixture: ComponentFixture<CreateStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
