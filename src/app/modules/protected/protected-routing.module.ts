import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthExecGuard } from 'src/app/auth/auth-exec.guard';
import { AccountComponent } from './pages/account/account.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { HouseJobComponent } from './pages/house/house-job/house-job.component';
import { HouseComponent } from './pages/house/house.component';
import { MembersComponent } from './pages/members/members.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivityComponent } from './pages/activities/activity/activity.component';
import { ActivityAttendanceComponent } from './pages/activities/activity-attendance/activity-attendance.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'account/:id', component: AccountComponent },
  { path: 'members', component: MembersComponent },
  { path: 'house', component: HouseComponent },
  { path: 'house-job/:id', component: HouseJobComponent },
  { path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthExecGuard] },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'activity/:id', component: ActivityComponent },
  { path: 'activity/:id/attendance', component: ActivityAttendanceComponent, canActivate: [AuthExecGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
