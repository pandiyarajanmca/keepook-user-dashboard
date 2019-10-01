import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePendingComponent } from './template-pending.component';

describe('TemplatePendingComponent', () => {
  let component: TemplatePendingComponent;
  let fixture: ComponentFixture<TemplatePendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
