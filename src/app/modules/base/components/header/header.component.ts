import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isExpanded = false;
  user: firebase.User;

  constructor(
    public auth: AuthService,
    private router: Router
  ) {

    auth.user.subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.auth.logout().then(() => {
      console.log("Logged out.");
      this.router.navigateByUrl('/home');
    });
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  collapse() {
    this.isExpanded = false;
  }
}
