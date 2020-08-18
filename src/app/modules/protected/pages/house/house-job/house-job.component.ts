import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';
import { Member } from '../../members/member';
import { HouseJob, HouseJobRequiredMember } from '../house-job';


interface RequiredMember {
  status: string;
  job: string;
  notes: string;
  member: Member;
}
@Component({
  selector: 'app-house-job',
  templateUrl: './house-job.component.html',
  styleUrls: ['./house-job.component.scss']
})
export class HouseJobComponent implements OnInit {
  loggedInUser: User;
  houseJob: HouseJob;
  requiredMembers: RequiredMember[];
  houseJobRef: DocumentReference;
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
      this.houseJobRef = this.afs.doc<User>(`house-jobs/${this.route.snapshot.paramMap.get('id')}`).ref;
      this.houseJobRef.get().then(value => {
        this.houseJob = <HouseJob>value.data();

        value.ref.collection('required-members').get().then(collection => {
          this.requiredMembers = [];
          collection.docs.forEach(doc => {
            const rM = <HouseJobRequiredMember>doc.data();
            rM.memberRef.get().then(memDoc => {
              const m = <Member>memDoc.data();
              const resolvedRM = { status: rM.status, job: rM.job, notes: rM.notes, member: m };
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

  handleJobStatusChange(memberId: string, newStatus: string) {
    this.houseJobRef.collection('required-members').doc(memberId).update({ status: newStatus }).then(() => {
      this.requiredMembers.forEach(rm => {
        if (rm.member.id === memberId) {
          rm.status = newStatus;
        }
      });
    });
  }

  handleMemberJobUpdate(rm: RequiredMember, fieldName: string) {
    const updateField = {
      [fieldName]: rm[fieldName]
    };
    this.houseJobRef.collection('required-members').doc(rm.member.id).update(updateField);
  }

  handleJobUpdate(fieldName: string) {
    const updateField = {
      [fieldName]: this.houseJob[fieldName]
    };
    this.houseJobRef.update(updateField);
  }

  handleDeleteJobCheck() {
    this.deleteCheck = true;
  }

  handleDeleteJob() {
    this.houseJobRef.collection('required-members').get().then(col => {
      col.docs.forEach(doc => doc.ref.delete());
    
      this.houseJobRef.delete().then(() => {
        this.router.navigate(['/p/house']);
      });
    });
  }

  handleDeleteJobCancel() {
    this.deleteCheck = false;
  }
}
