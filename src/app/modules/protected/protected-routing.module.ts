import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MembersComponent } from './components/members/members.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PollsComponent } from './components/polls/polls.component';


const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'polls', component: PollsComponent },
  { path: 'members', component: MembersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
