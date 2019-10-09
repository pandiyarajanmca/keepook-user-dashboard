import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSidbarComponent } from './task-sidbar.component';

describe('TaskSidbarComponent', () => {
  let component: TaskSidbarComponent;
  let fixture: ComponentFixture<TaskSidbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSidbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
