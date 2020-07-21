import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MembersComponent } from './pages/about/members/members.component';
import { NationalHistoryComponent } from './pages/about/national-history/national-history.component';
import { PledgeClassesComponent } from './pages/about/pledge-classes/pledge-classes.component';
import { RhoChapterHistoryComponent } from './pages/about/rho-chapter-history/rho-chapter-history.component';
import { AlumniEventsComponent } from './pages/alumni/alumni-events/alumni-events.component';
import { NotableAlumniComponent } from './pages/alumni/notable-alumni/notable-alumni.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CampusComponent } from './pages/involvement/campus/campus.component';
import { GiThetaChiComponent } from './pages/involvement/gi-theta-chi/gi-theta-chi.component';
import { InvolvementMissionComponent } from './pages/involvement/involvement-mission/involvement-mission.component';
import { NationalRelationsComponent } from './pages/involvement/national-relations/national-relations.component';
import { OutsideOfRhoComponent } from './pages/involvement/outside-of-rho/outside-of-rho.component';
import { PhilanthropyComponent } from './pages/involvement/philanthropy/philanthropy.component';
import { ServiceComponent } from './pages/involvement/service/service.component';
import { SocialComponent } from './pages/involvement/social/social.component';
import { FaqComponent } from './pages/parents/faq/faq.component';
import { HelpfulLinksComponent } from './pages/parents/helpful-links/helpful-links.component';
import { OmegafiComponent } from './pages/parents/omegafi/omegafi.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const BaseRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'about', component: AboutComponent },
  { path: 'about/rho-chapter-history', component: RhoChapterHistoryComponent },
  { path: 'about/national-history', component: NationalHistoryComponent },
  { path: 'about/members', component: MembersComponent },
  { path: 'about/pledge-classes', component: PledgeClassesComponent },

  { path: 'rush', component: RecruitmentComponent },

  { path: 'involvement/mission', component: InvolvementMissionComponent },
  { path: 'involvement/outside-of-rho', component: OutsideOfRhoComponent },
  { path: 'involvement/campus', component: CampusComponent },
  { path: 'involvement/social', component: SocialComponent },
  { path: 'involvement/gi-theta-chi', component: GiThetaChiComponent },
  { path: 'involvement/philanthropy', component: PhilanthropyComponent },
  { path: 'involvement/service', component: ServiceComponent },
  { path: 'involvement/national-relations', component: NationalRelationsComponent },

  { path: 'alumni/events', component: AlumniEventsComponent },
  { path: 'alumni/notable-alumni', component: NotableAlumniComponent },

  { path: 'parents', component: ParentsComponent },
  { path: 'parents/faq', component: FaqComponent },
  { path: 'parents/omegafi', component: OmegafiComponent },
  { path: 'parents/helpful-links', component: HelpfulLinksComponent },

  { path: 'contacts', component: ContactsComponent },
]