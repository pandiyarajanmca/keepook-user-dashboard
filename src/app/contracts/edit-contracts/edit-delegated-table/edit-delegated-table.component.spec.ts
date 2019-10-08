import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelegatedTableComponent } from './edit-delegated-table.component';

describe('EditDelegatedTableComponent', () => {
  let component: EditDelegatedTableComponent;
  let fixture: ComponentFixture<EditDelegatedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDelegatedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelegatedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
