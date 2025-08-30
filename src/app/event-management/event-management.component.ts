import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Event{
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}
@Component({
  selector: 'app-event-management',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './event-management.component.html',
  styleUrl: './event-management.component.css'
})
export class EventManagementComponent {
  events: Event[] = [
    {
      id:1,
      title: 'Farmer Awareness Program',
      date: '2025-09-12',
      location:'Village Hall',
      description: 'Awareness session on smart farming.'
    },{
       id: 2,
      title: 'Soil Health Camp',
      date: '2025-09-12', 
      location: 'Block Office', 
      description: 'Free soil testing for farmers.'
    }
  ];
  newEvent: Event = { id: 0, title: '', date: '', location: '', description: '' };
  editMode: boolean = false;

  addEvent() {
    if (this.newEvent.title && this.newEvent.date) {
      if (this.editMode) {
        const index = this.events.findIndex(e => e.id === this.newEvent.id);
        if (index !== -1) {
          this.events[index] = { ...this.newEvent };
        }
        this.editMode = false;
      } else {
        this.newEvent.id = Date.now();
        this.events.push({ ...this.newEvent });
      }
      this.newEvent = { id: 0, title: '', date: '', location: '', description: '' };
    }
  }

  editEvent(event: Event) {
    this.newEvent = { ...event };
    this.editMode = true;
  }

  deleteEvent(id: number) {
    this.events = this.events.filter(e => e.id !== id);
  }

}
