import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isExpanded = false;

  constructor(
    public auth: AuthService,
    private router: Router
  ) {
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
