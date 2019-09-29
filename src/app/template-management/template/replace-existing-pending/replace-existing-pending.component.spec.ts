import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceExistingPendingComponent } from './replace-existing-pending.component';

describe('ReplaceExistingPendingComponent', () => {
  let component: ReplaceExistingPendingComponent;
  let fixture: ComponentFixture<ReplaceExistingPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceExistingPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceExistingPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
