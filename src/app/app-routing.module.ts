import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { InvolvementComponent } from './components/involvement/involvement.component';
import { ParentsComponent } from './components/parents/parents.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { JoinComponent } from './components/join/join.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './modules/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'involvement', component: InvolvementComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'alumni', component: AlumniComponent },
  { path: 'join', component: JoinComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'p', loadChildren: () => import('./modules/protected/protected.module').then(mod => mod.ProtectedModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
