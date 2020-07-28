import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';
import { Member } from '../members/member';
import { HouseJob, HouseJobRequiredMember } from './house-job/house-job';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  loggedInUser: User;
  jobs: HouseJob[]
  liveIns: Member[];


  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.auth.user.subscribe(user => {
      this.loggedInUser = user;
    });

    this.afs.collection('house-jobs').ref.get().then(jobDocs => {
      this.jobs = jobDocs.docs.map(jobDoc => {
        return <HouseJob>jobDoc.data();
      });

      this.jobs.sort((a, b) => {
        const d1 = new Date(a.start);
        const d2 = new Date(b.start);
        return d1.valueOf() - d2.valueOf();
      })
    });

    this.afs.collection('members').ref.get().then(memDocs => {
      this.liveIns = memDocs.docs.map(doc => {
        return <Member>doc.data();
      }).filter((mem) => {
        return mem.livingIn?.toUpperCase() === 'YES';
      });
    });
  }

  ngOnInit(): void {
  }

  handleJobClicked(jobId: string) {
    this.router.navigate(['/p/house-job', jobId]);
  }

  handleMemberClicked(memberId: string) {
    const memberRef = this.afs.doc(`members/${memberId}`).ref;

    this.afs.collection('users').ref.where('memberRef', '==', memberRef).get().then(value => {
      if (!value.empty && value.size === 1) {
        const userId = value.docs[0].id;
        this.router.navigate(['/p/account', userId]);
      }
    });
  }

  userIsExec() {
    return this.loggedInUser.role === 'exec' || this.loggedInUser.role === 'admin';
  }

  createNewJob() {
    const job: HouseJob = {
      id: this.afs.createId(),
      start: '',
      due: '',
      title: '',
      fine: 0
    };

    const houseJobRef = this.afs.doc(`house-jobs/${job.id}`).ref;
    houseJobRef.set(job).then(() => {
      this.jobs.push(job);

      this.liveIns.forEach(member => {
        const rm: HouseJobRequiredMember = {
          job: member.liveInJob,
          notes: '',
          status: 'incomplete',
          memberRef: this.afs.doc(`members/${member.id}`).ref
        };

        houseJobRef.collection('required-members').doc(rm.memberRef.id).set(rm).then(() => {
          this.handleJobClicked(job.id);
        });
      });
    });
  }
}
