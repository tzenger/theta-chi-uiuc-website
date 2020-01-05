import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './components/account/account.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventComponent } from './components/calendar/event/event.component';
import { AddMemberComponent } from './components/members/add-member/add-member.component';
import { EditMemberComponent } from './components/members/edit-member/edit-member.component';
import { MemberComponent } from './components/members/member/member.component';
import { MembersComponent } from './components/members/members.component';
import { ViewMemberComponent } from './components/members/view-member/view-member.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PollsComponent } from './components/polls/polls.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { AddEventComponent } from './components/calendar/add-event/add-event.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
  declarations: [
    AccountComponent,
    CalendarComponent,
    PollsComponent,
    OrdersComponent,
    AttendanceComponent,
    AnnouncementsComponent,
    EventComponent,
    MembersComponent,
    AddMemberComponent,
    EditMemberComponent,
    ViewMemberComponent,
    MemberComponent,
    AddEventComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProtectedRoutingModule,
    FormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
  ]
})
export class ProtectedModule { }
