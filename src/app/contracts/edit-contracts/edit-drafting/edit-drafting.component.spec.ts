import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDraftingComponent } from './edit-drafting.component';

describe('EditDraftingComponent', () => {
  let component: EditDraftingComponent;
  let fixture: ComponentFixture<EditDraftingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDraftingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDraftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
