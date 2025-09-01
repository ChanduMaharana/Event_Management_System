import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Attendees {
  id: number;
  name: string;
  email: string;
  phone:number;
  status: 'Registered' | 'Checked-In' | 'Cancelled';
}

@Component({
  selector: 'app-attendee-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attendee-management.component.html',
  styleUrls: ['./attendee-management.component.css'] 
})
export class AttendeeManagementComponent {
  attendees: Attendees[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@gmail.com',phone:8774803232, status: 'Registered' },
    { id: 2, name: 'Bob Smith', email: 'bob@yahoo.com',phone:8774803232, status: 'Checked-In' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@outlook.com',phone:8774803232, status: 'Cancelled' }
  ];

  newAttendee: Attendees = { id: 0,
    name:'',
    email:'',
    phone:0,
    status: 'Registered' };

  addAttendee() {
    if (this.newAttendee.name && this.newAttendee.email) {
      this.newAttendee.id = this.attendees.length + 1;
      this.attendees.push({ ...this.newAttendee });
      this.newAttendee = { id: 0, name: '', email: '',phone:0, status: 'Registered' };
    }
  }

  updateStatus(attendee: Attendees, status: 'Registered' | 'Checked-In' | 'Cancelled') {
    attendee.status = status;
  }

  deleteAttendee(id: number) {
    this.attendees = this.attendees.filter(a => a.id !== id);
  }
}
