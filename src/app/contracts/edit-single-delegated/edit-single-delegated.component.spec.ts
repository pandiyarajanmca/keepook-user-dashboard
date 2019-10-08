import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleDelegatedComponent } from './edit-single-delegated.component';

describe('EditSingleDelegatedComponent', () => {
  let component: EditSingleDelegatedComponent;
  let fixture: ComponentFixture<EditSingleDelegatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSingleDelegatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSingleDelegatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
