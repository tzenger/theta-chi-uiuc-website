import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/user';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  loggedInUser: User;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.auth.user.subscribe(user => {
      this.loggedInUser = user;
    });

  }

  ngOnInit(): void {
  }

}
