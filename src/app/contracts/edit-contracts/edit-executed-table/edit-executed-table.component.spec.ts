import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExecutedTableComponent } from './edit-executed-table.component';

describe('EditExecutedTableComponent', () => {
  let component: EditExecutedTableComponent;
  let fixture: ComponentFixture<EditExecutedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExecutedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExecutedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
