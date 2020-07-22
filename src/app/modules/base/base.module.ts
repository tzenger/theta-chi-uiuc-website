import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { MembersComponent } from './pages/about/members/members.component';
import { NationalHistoryComponent } from './pages/about/national-history/national-history.component';
import { PledgeClassesComponent } from './pages/about/pledge-classes/pledge-classes.component';
import { RhoChapterHistoryComponent } from './pages/about/rho-chapter-history/rho-chapter-history.component';
import { AlumniEventsComponent } from './pages/alumni/alumni-events/alumni-events.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { NotableAlumniComponent } from './pages/alumni/notable-alumni/notable-alumni.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CampusComponent } from './pages/involvement/campus/campus.component';
import { GiThetaChiComponent } from './pages/involvement/gi-theta-chi/gi-theta-chi.component';
import { InvolvementMissionComponent } from './pages/involvement/involvement-mission/involvement-mission.component';
import { InvolvementComponent } from './pages/involvement/involvement.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomepageComponent,
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
    MembersComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class BaseModule { }
