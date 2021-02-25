import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './modules/auth/auth.guard';
import { BaseRoutes } from './modules/base/base.routes';

const routes: Routes = [
  { path: '', children: BaseRoutes },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  { path: 'p', loadChildren: () => import('./modules/protected/protected.module').then(mod => mod.ProtectedModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
