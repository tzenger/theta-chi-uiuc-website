import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isExpanded = false;
  user: User;

  constructor(
    public auth: AuthService,
    private router: Router,
    private zone: NgZone
  ) {
    this.auth.user.subscribe(user => {
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
