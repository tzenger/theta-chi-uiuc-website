import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthExecGuard } from 'src/app/auth/auth-exec.guard';
import { AccountComponent } from './pages/account/account.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { EventsComponent } from './pages/events/events.component';
import { MembersComponent } from './pages/members/members.component';
import { HouseComponent } from './pages/house/house.component';
import { HouseJobComponent } from './pages/house/house-job/house-job.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'account/:id', component: AccountComponent },
  { path: 'members', component: MembersComponent },
  { path: 'house', component: HouseComponent },
  { path: 'house-job/:id', component: HouseJobComponent },
  { path: 'events', component: EventsComponent, canActivate: [AuthExecGuard] },
  { path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthExecGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
