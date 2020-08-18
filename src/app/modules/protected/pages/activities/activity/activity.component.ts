import { Component, OnInit } from '@angular/core';
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


        this.afs.collection('members').ref.get().then(memDocs => {
          if (!memDocs.empty) {
            this.otherMembers = memDocs.docs.map(memDoc => {
              const mem = <Member>memDoc.data();
              return mem;
            }).filter(mem => mem.chapterStatus.toUpperCase() === 'ACTIVE' || mem.chapterStatus.toUpperCase() === 'PLEDGE');
          }
        }).then(() => {

          this.requiredMembersRef = value.ref.collection('required-members');
          this.requiredMembersRef.get().then(collection => {
            this.requiredMembers = [];
            collection.docs.forEach(doc => {
              const rM = <ActivityRequiredMember>doc.data();
              rM.memberRef.get().then(memDoc => {
                const m = <Member>memDoc.data();
                const resolvedRM = { status: rM.status, notes: rM.notes, member: m };
                this.requiredMembers.push(resolvedRM);

                this.otherMembers.splice(this.otherMembers.findIndex(mem => mem.id === m.id), 1);
              });
            });
          });
        });
      });
    }
  }

  handleUnRequireAllMembers() {
    this.requiredMembers.forEach(rm => {
      this.handleUnRequireMember(rm.member);
    });
  }

  handleRequireAllMembers() {
    let mems: Member[] = this.otherMembers.map(om => om);
    mems.forEach(mem => this.handleRequireMember(mem));
  }

  handleRequireLiveIns() {
    let mems: Member[] = [];
    this.otherMembers.forEach(mem => {
      if (mem.livingIn.toUpperCase() === 'YES') {
        mems.push(mem);
      }
    });
    mems.forEach(mem => this.handleRequireMember(mem));
  }

  handleRequireActiveMembers() {
    let mems: Member[] = [];
    this.otherMembers.forEach(mem => {
      if (mem.chapterStatus.toUpperCase() === 'ACTIVE') {
        mems.push(mem);
      }
    });
    mems.forEach(mem => this.handleRequireMember(mem));
  }

  handleRequirePledges() {
    let mems: Member[] = [];
    this.otherMembers.forEach(mem => {
      if (mem.chapterStatus.toUpperCase() === 'PLEDGE') {
        mems.push(mem);
      }
    });
    mems.forEach(mem => this.handleRequireMember(mem));
  }

  handleRequireMember(member: Member) {
    const rm = { memberRef: this.afs.doc(`members/${member.id}`).ref, notes: '', status: '' };
    this.requiredMembersRef.doc(member.id).set(rm).then(() => {
      this.requiredMembers.push({ member: member, notes: '', status: '' });
      const idx = this.otherMembers.findIndex(mem => mem.id === member.id);
      if (idx >= 0) {
        this.otherMembers.splice(idx, 1);
      }
    });
  }

  handleUnRequireMember(member: Member) {
    this.requiredMembersRef.doc(member.id).delete().then(() => {
      this.otherMembers.push(member);

      const idx = this.requiredMembers.findIndex(rm => rm.member.id === member.id);
      if (idx >= 0) {
        this.requiredMembers.splice(idx, 1);
      }
    });
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
