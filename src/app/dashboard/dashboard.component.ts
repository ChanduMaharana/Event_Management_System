import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Event{
  id: number;
  name: string;
  description: string;
  date: string;
  type: string;
  attendees: number;

}

interface Attendees{
  name: string;
  email: string;
  phone: number;
  eventId: number;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalEvents = 0;
  totalAttendees = 0;

  events: Event[] = [];
  attendees: Attendees[] = [];

  newEvent: Event = {
     id:0,
     name: '',
     description: '',
     date:'',
     type:'',
     attendees:0
    };

    newAttendee: Attendees = {
      name:'',
      email:'',
      phone:0,
      eventId:0
    };

    eventTypes = ['Conference', 'Workshop', 'Meetup'];
    filterType = '';

    addEvent(){
      this.newEvent.id = this.events.length+1;
      this.events.push({ ...this.newEvent});
      this.totalEvents = this.events.length;
      this.newEvent = { id: 0, name: '', description: '', date: '', type: '', attendees: 0 };
    }

    addAttendee(){
      if(!this.newAttendee.eventId)return;
      this.attendees.push({...this.newAttendee});
      const event = this.events.find(e => e.id === this.newAttendee.eventId);
      if(event)event.attendees++;
      this.totalAttendees = this.attendees.length;
      this.newAttendee = {name:'', email:'', phone:0 , eventId:0};
    }

    get filteredEvents(){
      return this.filterType ? this.events.filter(e => e.type === this.filterType): this.events;
    }

    deleteEvent(id: number){
      this.events = this.events.filter(e => e.id !== id);
      this.totalEvents = this.events.length;
    }

    getEventName(eventId: number): string {
  const event = this.events?.find(e => e.id === eventId);
  return event ? event.name : 'Unknown';
}
}
