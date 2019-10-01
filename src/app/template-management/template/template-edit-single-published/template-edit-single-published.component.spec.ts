import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEditSinglePublishedComponent } from './template-edit-single-published.component';

describe('TemplateEditSinglePublishedComponent', () => {
  let component: TemplateEditSinglePublishedComponent;
  let fixture: ComponentFixture<TemplateEditSinglePublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEditSinglePublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEditSinglePublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
