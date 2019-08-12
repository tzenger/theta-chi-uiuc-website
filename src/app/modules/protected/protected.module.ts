import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PollsComponent } from './polls/polls.component';
import { OrdersComponent } from './orders/orders.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MessagesComponent } from './messages/messages.component';
import { EventComponent } from './calendar/event/event.component';


@NgModule({
  declarations: [AccountComponent, SettingsComponent, CalendarComponent, PollsComponent, OrdersComponent, AttendanceComponent, AnnouncementsComponent, MessagesComponent, EventComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
