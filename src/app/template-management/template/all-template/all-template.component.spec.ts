import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTemplateComponent } from './all-template.component';

describe('AllTemplateComponent', () => {
  let component: AllTemplateComponent;
  let fixture: ComponentFixture<AllTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
