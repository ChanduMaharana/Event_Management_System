import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeManagementComponent } from './attendee-management.component';

describe('AttendeeManagementComponent', () => {
  let component: AttendeeManagementComponent;
  let fixture: ComponentFixture<AttendeeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendeeManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
