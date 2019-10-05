import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExecuteComponent } from './edit-execute.component';

describe('EditExecuteComponent', () => {
  let component: EditExecuteComponent;
  let fixture: ComponentFixture<EditExecuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExecuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
