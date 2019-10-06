import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleExecutedComponent } from './edit-single-executed.component';

describe('EditSingleExecutedComponent', () => {
  let component: EditSingleExecutedComponent;
  let fixture: ComponentFixture<EditSingleExecutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSingleExecutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSingleExecutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
