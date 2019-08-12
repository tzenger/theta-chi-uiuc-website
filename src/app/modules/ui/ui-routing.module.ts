import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RhoChapterHistoryComponent } from './about/rho-chapter-history/rho-chapter-history.component';
import { NationalHistoryComponent } from './about/national-history/national-history.component';
import { MembersComponent } from './about/members/members.component';
import { PledgeClassesComponent } from './about/pledge-classes/pledge-classes.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { InvolvementMissionComponent } from './involvement/involvement-mission/involvement-mission.component';
import { OutsideOfRhoComponent } from './involvement/outside-of-rho/outside-of-rho.component';
import { CampusComponent } from './involvement/campus/campus.component';
import { SocialComponent } from './involvement/social/social.component';
import { GiThetaChiComponent } from './involvement/gi-theta-chi/gi-theta-chi.component';
import { PhilanthropyComponent } from './involvement/philanthropy/philanthropy.component';
import { ServiceComponent } from './involvement/service/service.component';
import { NationalRelationsComponent } from './involvement/national-relations/national-relations.component';
import { AlumniEventsComponent } from './alumni/alumni-events/alumni-events.component';
import { NotableAlumniComponent } from './alumni/notable-alumni/notable-alumni.component';
import { ParentsComponent } from './parents/parents.component';
import { FaqComponent } from './parents/faq/faq.component';
import { OmegafiComponent } from './parents/omegafi/omegafi.component';
import { HelpfulLinksComponent } from './parents/helpful-links/helpful-links.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'about', component: AboutComponent },
  { path: 'about/rho-chapter-history', component: RhoChapterHistoryComponent },
  { path: 'about/national-history', component: NationalHistoryComponent },
  { path: 'about/members', component: MembersComponent },
  { path: 'about/pledge-classes', component: PledgeClassesComponent },

  { path: 'recruitment', component: RecruitmentComponent },

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
