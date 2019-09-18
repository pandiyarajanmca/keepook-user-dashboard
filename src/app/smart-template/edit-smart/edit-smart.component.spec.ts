import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSmartComponent } from './edit-smart.component';

describe('EditUsersComponent', () => {
  let component: EditSmartComponent;
  let fixture: ComponentFixture<EditSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
