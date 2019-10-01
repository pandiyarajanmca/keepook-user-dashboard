import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAllDelegatedComponent } from './template-all-delegated.component';

describe('TemplateAllDelegatedComponent', () => {
  let component: TemplateAllDelegatedComponent;
  let fixture: ComponentFixture<TemplateAllDelegatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAllDelegatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAllDelegatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
