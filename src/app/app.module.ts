import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/_shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { ParentsComponent } from './components/parents/parents.component';
import { JoinComponent } from './components/join/join.component';
import { InvolvementComponent } from './components/involvement/involvement.component';
import { NewsComponent } from './components/news/news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BaseModule } from './modules/base/base.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AlumniComponent,
    ParentsComponent,
    JoinComponent,
    InvolvementComponent,
    NewsComponent,
  ],
  imports: [
    BaseModule,
    AuthModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
