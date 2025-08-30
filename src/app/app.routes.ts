import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { AttendeeManagementComponent } from './attendee-management/attendee-management.component';

export const routes: Routes = [
  
  { path: '',component:HomeComponent},
  { path: 'home',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path:'dashboard', component:DashboardComponent},
  { path:'events',component: EventManagementComponent},
  { path: 'attendees',component:AttendeeManagementComponent}
];
