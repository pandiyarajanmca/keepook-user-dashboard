import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleDraftingComponent } from './edit-single-drafting.component';

describe('EditSingleDraftingComponent', () => {
  let component: EditSingleDraftingComponent;
  let fixture: ComponentFixture<EditSingleDraftingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSingleDraftingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSingleDraftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
