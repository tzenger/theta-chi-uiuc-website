import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference, CollectionReference } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';
import { Activity, ActivityRequiredMember } from '../activity';
import { Member } from '../../members/member';

interface RequiredMember {
  status: string;
  notes: string;
  member: Member;
}

@Component({
  selector: 'app-activity-attendance',
  templateUrl: './activity-attendance.component.html',
  styleUrls: ['./activity-attendance.component.scss']
})
export class ActivityAttendanceComponent {
  loggedInUser: User;
  activityRef: DocumentReference;
  requiredMembers: RequiredMember[];
  otherMembers: Member[];
  activity: Activity;
  deleteCheck = false;
  requiredMembersRef: CollectionReference;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.auth.user.subscribe(user => {
      this.loggedInUser = user;
    });

    if (this.route.snapshot.paramMap.has('id')) {
      this.activityRef = this.afs.doc<User>(`activities/${this.route.snapshot.paramMap.get('id')}`).ref;
      this.activityRef.get().then(value => {
        this.activity = <Activity>value.data();
      });
    }
  }


  @HostListener('input', ['$event'])
  handleUserInput(event: Event) {
    console.log('EVENT', event);
  }
}


