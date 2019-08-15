import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PollsComponent } from './components/polls/polls.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MembersComponent } from './components/members/members.component';


const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'polls', component: PollsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'members', component: MembersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
