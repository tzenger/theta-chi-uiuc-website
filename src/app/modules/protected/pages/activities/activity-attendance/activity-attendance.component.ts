import { Component } from '@angular/core';
import { AngularFirestore, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';
import { Member } from '../../members/member';
import { Activity, ActivityRequiredMember } from '../activity';

interface Attendee {
  uin: string;
  checkInTime: string;
  memberRef: DocumentReference;
}

@Component({
  selector: 'app-activity-attendance',
  templateUrl: './activity-attendance.component.html',
  styleUrls: ['./activity-attendance.component.scss']
})
export class ActivityAttendanceComponent {
  loggedInUser: User;
  activityRef: DocumentReference;
  requiredMembers: ActivityRequiredMember[];
  otherMembers: Member[];
  activity: Activity;
  deleteCheck = false;
  requiredMembersRef: CollectionReference;

  userInput = new FormControl('');
  attendees: Array<Attendee> = [];

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

  parseInput(userInput: string): string | undefined {
    const idx = userInput.indexOf('^CARDHOLDER/UNIVERSITY^');

    if (idx === 18) {
      const uin = userInput.substring(6, 15);
      return uin;
    }
    return undefined;
  }

  onSubmit() {
    const input = this.userInput.value;
    this.userInput.reset();
    const uin = this.parseInput(input);
    if (!uin) return;

    const checkInTime = (new Date()).toISOString();

    let attendee: Attendee = { uin: uin, checkInTime: checkInTime, memberRef: undefined }

    this.attendees.push(attendee);
    // this.activityRef.collection('required-members').get().then(resp => {
    //   const memberRefs = resp.docs.filter(doc => {
    //     const rm = <ActivityRequiredMember>doc.data()
    //     return rm.memberRef.member.uin === uin;
    //   }).map(doc => doc.ref);

    //   if (memberRefs.length > 0) {
    //     memberRefs.forEach(mRef => {
    //       attendee.memberRef = mRef;

    //       mRef.update({ status: 'accepted', statusTime: checkInTime }).then(() => {
    //         this.attendees.push(attendee);
    //       })
    //     })
    //   } else {
    //     this.attendees.push(attendee);
    //   }
    // });

  }
}


