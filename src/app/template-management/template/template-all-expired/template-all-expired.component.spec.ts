import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAllExpiredComponent } from './template-all-expired.component';

describe('TemplateAllExpiredComponent', () => {
  let component: TemplateAllExpiredComponent;
  let fixture: ComponentFixture<TemplateAllExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAllExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAllExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
