import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BaseRoutes } from './modules/base/base.routes';

const routes: Routes = [
  { path: '', children: BaseRoutes },
//   { path: 'p', loadChildren: () => import('./modules/protected/protected.module').then(mod => mod.ProtectedModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
