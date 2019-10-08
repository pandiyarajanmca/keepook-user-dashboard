import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelegatedComponent } from './edit-delegated.component';

describe('EditDelegatedComponent', () => {
  let component: EditDelegatedComponent;
  let fixture: ComponentFixture<EditDelegatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDelegatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelegatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
