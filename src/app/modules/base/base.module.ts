import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './about/members/members.component';
import { NationalHistoryComponent } from './about/national-history/national-history.component';
import { PledgeClassesComponent } from './about/pledge-classes/pledge-classes.component';
import { RhoChapterHistoryComponent } from './about/rho-chapter-history/rho-chapter-history.component';
import { AlumniEventsComponent } from './alumni/alumni-events/alumni-events.component';
import { AlumniComponent } from './alumni/alumni.component';
import { NotableAlumniComponent } from './alumni/notable-alumni/notable-alumni.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { CampusComponent } from './involvement/campus/campus.component';
import { GiThetaChiComponent } from './involvement/gi-theta-chi/gi-theta-chi.component';
import { InvolvementMissionComponent } from './involvement/involvement-mission/involvement-mission.component';
import { InvolvementComponent } from './involvement/involvement.component';
import { NationalRelationsComponent } from './involvement/national-relations/national-relations.component';
import { OutsideOfRhoComponent } from './involvement/outside-of-rho/outside-of-rho.component';
import { PhilanthropyComponent } from './involvement/philanthropy/philanthropy.component';
import { ServiceComponent } from './involvement/service/service.component';
import { SocialComponent } from './involvement/social/social.component';
import { FaqComponent } from './parents/faq/faq.component';
import { HelpfulLinksComponent } from './parents/helpful-links/helpful-links.component';
import { OmegafiComponent } from './parents/omegafi/omegafi.component';
import { ParentsComponent } from './parents/parents.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    FooterComponent,
    AboutComponent,
    HomeComponent,
    RecruitmentComponent,
    InvolvementComponent,
    AlumniComponent,
    ParentsComponent,
    ContactsComponent,
    RhoChapterHistoryComponent,
    NationalHistoryComponent,
    OutsideOfRhoComponent,
    CampusComponent,
    SocialComponent,
    GiThetaChiComponent,
    PhilanthropyComponent,
    ServiceComponent,
    NationalRelationsComponent,
    NotableAlumniComponent,
    FaqComponent,
    OmegafiComponent,
    HelpfulLinksComponent,
    InvolvementMissionComponent,
    AlumniEventsComponent,
    PledgeClassesComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BaseModule { }
