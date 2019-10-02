import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLegalTreeComponent } from './view-legal-tree.component';

describe('ViewLegalTreeComponent', () => {
  let component: ViewLegalTreeComponent;
  let fixture: ComponentFixture<ViewLegalTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLegalTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLegalTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
