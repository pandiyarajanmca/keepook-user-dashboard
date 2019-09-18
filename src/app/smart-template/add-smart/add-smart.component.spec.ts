import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmartComponent } from './add-smart.component';

describe('AddSmartComponent', () => {
  let component: AddSmartComponent;
  let fixture: ComponentFixture<AddSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
