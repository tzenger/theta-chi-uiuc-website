import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventsComponent } from './components/events/events.component';
import { MembersComponent } from './components/members/members.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'events', component: EventsComponent },
  { path: 'members', component: MembersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
