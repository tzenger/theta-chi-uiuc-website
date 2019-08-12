import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRoutingModule } from './ui-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { InvolvementComponent } from './involvement/involvement.component';
import { AlumniComponent } from './alumni/alumni.component';
import { ParentsComponent } from './parents/parents.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RhoChapterHistoryComponent } from './about/rho-chapter-history/rho-chapter-history.component';
import { NationalHistoryComponent } from './about/national-history/national-history.component';
import { OutsideOfRhoComponent } from './involvement/outside-of-rho/outside-of-rho.component';
import { CampusComponent } from './involvement/campus/campus.component';
import { SocialComponent } from './involvement/social/social.component';
import { GiThetaChiComponent } from './involvement/gi-theta-chi/gi-theta-chi.component';
import { PhilanthropyComponent } from './involvement/philanthropy/philanthropy.component';
import { ServiceComponent } from './involvement/service/service.component';
import { NationalRelationsComponent } from './involvement/national-relations/national-relations.component';
import { NotableAlumniComponent } from './alumni/notable-alumni/notable-alumni.component';
import { FaqComponent } from './parents/faq/faq.component';
import { OmegafiComponent } from './parents/omegafi/omegafi.component';
import { HelpfulLinksComponent } from './parents/helpful-links/helpful-links.component';
import { InvolvementMissionComponent } from './involvement/involvement-mission/involvement-mission.component';
import { AlumniEventsComponent } from './alumni/alumni-events/alumni-events.component';
import { PledgeClassesComponent } from './about/pledge-classes/pledge-classes.component';
import { MembersComponent } from './about/members/members.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
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
    AboutComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class UiModule { }
