import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { AuthExecGuard } from 'src/app/auth/auth-exec.guard';
import { MembersComponent } from './pages/members/members.component';
import { AuthBasicGuard } from 'src/app/auth/auth-basic.guard';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthExecGuard] },
  { path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthBasicGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
