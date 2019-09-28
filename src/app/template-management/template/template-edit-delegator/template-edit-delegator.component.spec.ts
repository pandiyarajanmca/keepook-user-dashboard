import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEditDelegatorComponent } from './template-edit-delegator.component';

describe('TemplateEditDelegatorComponent', () => {
  let component: TemplateEditDelegatorComponent;
  let fixture: ComponentFixture<TemplateEditDelegatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEditDelegatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEditDelegatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
