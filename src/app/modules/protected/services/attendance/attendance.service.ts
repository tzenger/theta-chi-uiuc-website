import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TcEvent } from '../event/event.model';
import { EventService } from '../event/event.service';
import { TcEventAttendance } from './attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(
    private afs: AngularFirestore,
    private eventsService: EventService
  ) { }

  public addAttendance(eventAttendance: TcEventAttendance, event: TcEvent): void {
    const id = this.afs.createId();
    const attendanceRef: AngularFirestoreDocument<any> = this.afs.doc(`attendances/${id}`);
    eventAttendance.id = id;

    const obj = Object.assign({}, eventAttendance);
    attendanceRef.set(obj, { merge: false }).then(() => {
      event.attendanceId = id;
      console.log('Added event attendance to db.');
      this.eventsService.updateEvent(event);
    }).catch(err => {
      console.log('Failed to add event attendance to db: ', err);
    });
  }

  public updateAttendance(eventAttendance: TcEventAttendance): void {
    if (!eventAttendance.id) {
      console.log('Failed to update event attendance in db: id is undefined');
      return;
    }

    const attendanceRef: AngularFirestoreDocument<any> = this.afs.doc(`attendances/${eventAttendance.id}`);

    const obj = Object.assign({}, eventAttendance);
    attendanceRef.set(obj, { merge: true }).then(() => {
      console.log('Updated event attendance in db.');
    }).catch(err => {
      console.log('Failed to update event attendance in db: ', err);
    });
  }

  public removeAttendance(id: string): void {
    if (!id) {
      return;
    }

    const attendanceRef: AngularFirestoreDocument<any> = this.afs.doc(`attendances/${id}`);

    attendanceRef.delete().then(() => {
      console.log('Deleted event attendance db entry.');
    }).catch(err => {
      console.log('Failed to delete event attendance db entry: ', err);
    });
  }

  public getAttendanceById(attendanceId: string): Observable<TcEventAttendance> {
    return this.afs.collection('attendances').doc<any>(attendanceId).valueChanges().pipe(map((doc, index) => this.convertDocToAttendance(doc)));
  }

  public async getAll(): Promise<TcEventAttendance[]> {
    let events: Array<TcEventAttendance> = [];

    var eventsRef = this.afs.collection('attendances').ref;

    const data = await eventsRef.get();

    data.forEach(doc => {
      events.push(this.convertDocToAttendance(doc));
    });

    return events;
  }

  public async getAttendances(startDateTime: Date, endDateTime: Date, inclusive = true): Promise<TcEventAttendance[]> {
    var eventsRef = this.afs.collection('attendances').ref;

    console.log('Getting: ', startDateTime, endDateTime);

    const data = await eventsRef.orderBy('eventStartDateTime')
      .where('eventStartDateTime', '>=', firebase.firestore.Timestamp.fromDate(startDateTime))
      .where('eventStartDateTime', inclusive ? '<=' : '<', firebase.firestore.Timestamp.fromDate(endDateTime))
      .get();

    console.log('Got: ', data);

    let events: Array<TcEventAttendance> = [];
    data.forEach((result) => {
      events.push(this.convertDocToAttendance(result.data()));
    });

    return events;
  }

  private convertDocToAttendance(doc: any): TcEventAttendance {
    if (!doc) {
      return doc;
    }
    let eventAttendance = <TcEventAttendance>doc;
    const startDateTime = <firebase.firestore.Timestamp><unknown>eventAttendance.startDateTime
    eventAttendance.startDateTime = startDateTime.toDate();
    const eventStartDateTime = <firebase.firestore.Timestamp><unknown>eventAttendance.eventStartDateTime
    eventAttendance.eventStartDateTime = eventStartDateTime.toDate();
    const eventEndDateTime = <firebase.firestore.Timestamp><unknown>eventAttendance.eventEndDateTime
    eventAttendance.eventEndDateTime = eventEndDateTime.toDate();
    return eventAttendance;
  }
}
