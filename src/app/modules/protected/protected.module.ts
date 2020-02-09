import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { AccountComponent } from './components/account/account.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EditEventComponent } from './components/events/edit-event/edit-event.component';
import { EventsComponent } from './components/events/events.component';
import { ViewEventComponent } from './components/events/view-event/view-event.component';
import { FineReportsComponent } from './components/fine-reports/fine-reports.component';
import { AddMemberComponent } from './components/members/add-member/add-member.component';
import { EditMemberComponent } from './components/members/edit-member/edit-member.component';
import { MembersComponent } from './components/members/members.component';
import { ViewMemberComponent } from './components/members/view-member/view-member.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { SelfCheckinComponent } from './components/attendance/self-checkin/self-checkin.component';

@NgModule({
  declarations: [
    AccountComponent,
    CalendarComponent,
    AttendanceComponent,
    MembersComponent,
    AddMemberComponent,
    EditMemberComponent,
    ViewMemberComponent,
    EditEventComponent,
    ViewEventComponent,
    EventsComponent,
    FineReportsComponent,
    SelfCheckinComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProtectedRoutingModule,
    FormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    FontAwesomeModule
  ]
})
export class ProtectedModule { }
