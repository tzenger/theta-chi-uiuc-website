import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
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
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  loggedInUser: User;
  activityRef: DocumentReference;
  requiredMembers: RequiredMember[];
  otherMembers: Member[];
  activity: Activity;
  deleteCheck = false;

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

        value.ref.collection('required-members').get().then(collection => {
          this.requiredMembers = [];
          collection.docs.forEach(doc => {
            const rM = <ActivityRequiredMember>doc.data();
            rM.memberRef.get().then(memDoc => {
              const m = <Member>memDoc.data();
              const resolvedRM = { status: rM.status, notes: rM.notes, member: m };
              this.requiredMembers.push(resolvedRM);
            });
          });
        })
      });
    }
  }

  ngOnInit(): void {
  }
  
  userIsExec() {
    return this.loggedInUser.role === 'admin' || this.loggedInUser.role === 'exec';
  }

  userCanEdit(memberId: string) {
    return this.userIsExec() || this.loggedInUser.memberRef.id === memberId;
  }

  handleMemberStatusChange(memberId: string, newStatus: string) {
    this.activityRef.collection('required-members').doc(memberId).update({ status: newStatus }).then(() => {
      this.requiredMembers.forEach(rm => {
        if (rm.member.id === memberId) {
          rm.status = newStatus;
        }
      });
    });
  }

  handleMemberUpdate(rm: RequiredMember, fieldName: string) {
    const updateField = {
      [fieldName]: rm[fieldName]
    };
    this.activityRef.collection('required-members').doc(rm.member.id).update(updateField);
  }

  handleActivityUpdate(fieldName: string) {
    const updateField = {
      [fieldName]: this.activity[fieldName]
    };
    this.activityRef.update(updateField);
  }

  handleDeleteActivityCheck() {
    this.deleteCheck = true;
  }

  handleDeleteActivity() {
    this.activityRef.delete().then(() => {
      this.router.navigate(['/p/activities']);
    });
  }

  handleDeleteActivityCancel() {
    this.deleteCheck = false;
  }
}
