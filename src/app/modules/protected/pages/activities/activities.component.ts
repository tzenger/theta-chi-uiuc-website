import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference, CollectionReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';
import { Activity } from './activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  loggedInUser: User;

  todaysActivities: Activity[];
  upcomingActivities: Activity[];
  pastActivities: Activity[];

  activitiesRef: CollectionReference;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.auth.user.subscribe(user => {
      this.loggedInUser = user;
    });

    this.activitiesRef = this.afs.collection('activities').ref;
    this.activitiesRef.get().then(activityDocs => {

      this.todaysActivities = [];
      this.upcomingActivities = [];
      this.pastActivities = [];

      if (activityDocs.empty) {
        return;
      }

      activityDocs.docs.forEach(doc => {
        const activity = <Activity>doc.data();
        const today = new Date();
        const startDate = new Date(activity.start);

        if (startDate && startDate.getFullYear() === today.getFullYear() && startDate.getMonth() === today.getMonth() && startDate.getDate() === today.getDate()) {
          this.todaysActivities.push(activity);
        } else if (startDate && startDate.valueOf() < today.valueOf()) {
          this.pastActivities.push(activity);
        } else {
          this.upcomingActivities.push(activity);
        }
      });
    });
  }

  ngOnInit(): void {
  }

  createNewActivity() {
    const activity: Activity = {
      id: this.afs.createId(),
      title: 'New Activity',
      type: '',
      description: '',
      start: '',
      end: '',
      fine: 0
    }
    this.afs.doc(`/activities/${activity.id}`).set(activity).then(() => {
      this.router.navigate(['/p/activity', activity.id]);
    });
  }
}
