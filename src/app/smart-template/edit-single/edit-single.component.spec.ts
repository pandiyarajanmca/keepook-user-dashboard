import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleComponent } from './edit-single.component';

describe('EditSingleComponent', () => {
  let component: EditSingleComponent;
  let fixture: ComponentFixture<EditSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
