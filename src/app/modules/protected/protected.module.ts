import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProtectedRoutingModule } from './protected-routing.module';
import { AccountComponent } from './pages/account/account.component';
import { ViewAccountDetailsComponent } from './components/view-account-details/view-account-details.component';
import { EditAccountDetailsComponent } from './components/edit-account-details/edit-account-details.component';
import { MembersComponent } from './pages/members/members.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { EventsComponent } from './pages/events/events.component';
import { InlineEditComponent } from './components/inline-edit/inline-edit.component';
import { HouseComponent } from './pages/house/house.component';
import { HouseJobComponent } from './pages/house/house-job/house-job.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivityComponent } from './pages/activities/activity/activity.component';
import { ActivityCardComponent } from './pages/activities/activity-card/activity-card.component';
import { HouseJobCardComponent } from './pages/house/house-job-card/house-job-card.component';
import { ActivityAttendanceComponent } from './pages/activities/activity-attendance/activity-attendance.component';

@NgModule({
  declarations: [
    AccountComponent,
    ViewAccountDetailsComponent,
    EditAccountDetailsComponent,
    MembersComponent,
    AnnouncementsComponent,
    EventsComponent,
    InlineEditComponent,
    HouseComponent,
    HouseJobComponent,
    ActivitiesComponent,
    ActivityComponent,
    ActivityCardComponent,
    ActivityAttendanceComponent,
    HouseJobCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProtectedRoutingModule,
    FormsModule,
  ]
})
export class ProtectedModule { }
