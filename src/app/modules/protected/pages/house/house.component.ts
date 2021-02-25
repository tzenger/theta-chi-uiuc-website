import { Component, OnInit } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';
import { Member } from '../members/member';
import { HouseJob, HouseJobRequiredMember } from './house-job';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  loggedInUser: User;

  todaysJobs: HouseJob[];
  upcomingJobs: HouseJob[];
  pastJobs: HouseJob[];

  jobsRef: CollectionReference;

  liveIns: Member[];


  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.auth.user.subscribe(user => {
      this.loggedInUser = user;
    });

    this.jobsRef = this.afs.collection('house-jobs').ref;
    this.jobsRef.get().then(jobDocs => {

      this.todaysJobs = [];
      this.pastJobs = [];
      this.upcomingJobs = [];

      if (jobDocs.empty) {
        return;
      }

      jobDocs.docs.forEach(doc => {
        const job = <HouseJob>doc.data();
        const today = new Date();
        const startDate = new Date(job.start);

        if (startDate && startDate.getFullYear() === today.getFullYear() && startDate.getMonth() === today.getMonth() && startDate.getDate() === today.getDate()) {
          this.todaysJobs.push(job);
        } else if (startDate && startDate.valueOf() < today.valueOf()) {
          this.pastJobs.push(job);
        } else {
          this.upcomingJobs.push(job);
        }
      });
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

  createNewHouseJob(defaultJobs = true) {
    const job: HouseJob = {
      id: this.afs.createId(),
      start: '',
      due: '',
      title: '',
      fine: 0
    };

    const houseJobRef = this.afs.doc(`house-jobs/${job.id}`).ref;
    houseJobRef.set(job).then(() => {

      this.liveIns.forEach(member => {
        const rm: HouseJobRequiredMember = {
          job: defaultJobs ? member.liveInJob : '',
          notes: '',
          status: 'incomplete',
          statusTime: '',
          memberRef: this.afs.doc(`members/${member.id}`).ref
        };

        houseJobRef.collection('required-members').doc(rm.memberRef.id).set(rm).then(() => {
          this.handleJobClicked(job.id);
        });
      });
    });
  }
}
