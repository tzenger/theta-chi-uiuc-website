import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MessagesComponent } from './messages/messages.component';
import { OrdersComponent } from './orders/orders.component';
import { PollsComponent } from './polls/polls.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'polls', component: PollsComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
