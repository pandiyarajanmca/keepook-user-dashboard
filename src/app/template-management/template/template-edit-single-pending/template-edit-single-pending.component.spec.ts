import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEditSinglePendingComponent } from './template-edit-single-pending.component';

describe('TemplateEditSinglePendingComponent', () => {
  let component: TemplateEditSinglePendingComponent;
  let fixture: ComponentFixture<TemplateEditSinglePendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEditSinglePendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEditSinglePendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
