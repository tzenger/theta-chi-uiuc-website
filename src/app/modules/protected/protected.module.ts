import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountComponent } from './components/account/account.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventComponent } from './components/calendar/event/event.component';
import { AddMemberComponent } from './components/members/add-member/add-member.component';
import { EditMemberComponent } from './components/members/edit-member/edit-member.component';
import { MembersComponent } from './components/members/members.component';
import { ViewMemberComponent } from './components/members/view-member/view-member.component';
import { MessagesComponent } from './components/messages/messages.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PollsComponent } from './components/polls/polls.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChapterComponent } from './components/chapter/chapter.component';


@NgModule({
  declarations: [
    AccountComponent,
    SettingsComponent,
    CalendarComponent,
    PollsComponent,
    OrdersComponent,
    AttendanceComponent,
    AnnouncementsComponent,
    MessagesComponent,
    EventComponent,
    MembersComponent,
    AddMemberComponent,
    EditMemberComponent,
    ViewMemberComponent,
    ChapterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
