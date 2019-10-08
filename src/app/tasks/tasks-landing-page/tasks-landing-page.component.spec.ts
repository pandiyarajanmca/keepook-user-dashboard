import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksLandingPageComponent } from './tasks-landing-page.component';

describe('TasksLandingPageComponent', () => {
  let component: TasksLandingPageComponent;
  let fixture: ComponentFixture<TasksLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
