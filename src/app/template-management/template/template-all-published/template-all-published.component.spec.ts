import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAllPublishedComponent } from './template-all-published.component';

describe('TemplateAllPublishedComponent', () => {
  let component: TemplateAllPublishedComponent;
  let fixture: ComponentFixture<TemplateAllPublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAllPublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAllPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
