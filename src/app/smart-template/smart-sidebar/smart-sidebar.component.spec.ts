import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSidebarComponent } from './smart-sidebar.component';

describe('SmartSidebarComponent', () => {
  let component: SmartSidebarComponent;
  let fixture: ComponentFixture<SmartSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
