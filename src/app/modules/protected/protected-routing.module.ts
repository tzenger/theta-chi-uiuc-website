import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthExecGuard } from 'src/app/auth/auth-exec.guard';
import { AccountComponent } from './pages/account/account.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { EventsComponent } from './pages/events/events.component';
import { MembersComponent } from './pages/members/members.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthExecGuard] },
  { path: 'events', component: EventsComponent, canActivate: [AuthExecGuard] },
  { path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthExecGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
