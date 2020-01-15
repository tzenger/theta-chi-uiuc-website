import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { TcEvent, EventCategory } from './event.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  internalCalendarId = 'jem0uc9vivub6u1elm3vqhcrco@group.calendar.google.com';
  externalCalendarId = '4uf4s1hvt90ne18q1vvvsljnps@group.calendar.google.com';
  alumniCalendarId = '309rk3uhk1tp66pmmeu3p2kqk8@group.calendar.google.com';

  constructor(
    private functions: AngularFireFunctions,
    private afs: AngularFirestore
  ) {
    this.functions.functions.useFunctionsEmulator('http://localhost:5001');
  }

  getCalendaryIdFromCategory(category: string): string {
    if (category === EventCategory.ALUMNI_PARENT) {
      return this.alumniCalendarId;
    }
    if (category === EventCategory.RECRUITMENT_PUBLIC) {
      return this.externalCalendarId;
    }
    return this.internalCalendarId;
  }

  addEvent(event: TcEvent): void {
    const googleCalendarId = this.getCalendaryIdFromCategory(event.category);
    var startTime = event.allDayEvent ? event.startDate : event.startDateTime;
    var endTime = event.allDayEvent ? event.endDate : event.endDateTime;

    const googleCalendarData = {
      calendarId: googleCalendarId,
      title: event.title,
      description: event.description ? event.description : '',
      startTime: startTime.toUTCString(), //"2020-01-04T10:00:00",
      endTime: endTime.toUTCString() //"2020-01-04T13:00:00"
    }

    var addCalendarEvent = this.functions.httpsCallable('addCalendarEvent');

    addCalendarEvent(googleCalendarData).toPromise().then(res => {
      console.log("Added calendar event: ", res);

      event.googleEventId = res.data.id;
      event.googleCalendarId = googleCalendarId;

      const id = this.afs.createId();
      const eventRef: AngularFirestoreDocument<any> = this.afs.doc(`events/${id}`);
      event.id = id;

      const obj = Object.assign({}, event);
      eventRef.set(obj, { merge: false }).then(() => {
        console.log('Added event to db.');
      }).catch(err => {
        console.log('Faild to add event to db: ', err);
      });

    }).catch(err => {
      console.error("Failed to add event to calendar: ", err);
    });
  }

  updateEvent(event: TcEvent): void {
    if (!event.id || !event.googleCalendarId || !event.googleEventId) {
      return;
    }

    const googleCalendarData = {
      calendarId: event.googleCalendarId,
      eventId: event.googleEventId,
      title: event.title,
      description: event.description ? event.description : '',
      startTime: event.startDateTime.toUTCString(), //"2020-01-04T10:00:00",
      endTime: event.endDateTime.toUTCString() //"2020-01-04T13:00:00"
    }

    var updateCalendarEvent = this.functions.httpsCallable('updateCalendarEvent');

    updateCalendarEvent(googleCalendarData).toPromise().then(res => {
      console.log("Updated calendar event: ", res);

      const eventRef: AngularFirestoreDocument<any> = this.afs.doc(`events/${event.id}`);

      const obj = Object.assign({}, event);
      const setRes = eventRef.set(obj, { merge: true });

      console.log('Updated event in db: ', setRes);

    }).catch(err => {
      console.error("Failed to add event to calendar: ", err);
    });
  }

  removeEvent(data: { id: string; googleCalendarId: string; googleEventId: string; }): void {

    var deleteCalendarEvent = this.functions.httpsCallable('deleteCalendarEvent');

    deleteCalendarEvent(data).toPromise().then(res => {
      console.log("Deleted calendar event: ", data);

      const eventRef: AngularFirestoreDocument<any> = this.afs.doc(`events/${data.id}`);

      eventRef.delete().then(res => {
        console.log('Deleted db entry: ', res);
      }).catch(err => {
        console.log('Failed to delete db entry: ', err);
      });

    }).catch(err => {
      console.error("Failed to add event to calendar: ", err);
    });
  }

  public async getCurrent(): Promise<TcEvent[]> {
    let events: Array<TcEvent> = [];

    var eventsRef = this.afs.collection('events').ref;

    const nowTime = Date.now.toString();

    const data = await eventsRef.where('startTime', '<=', nowTime).where('endTime', '>=', nowTime).get();

    data.forEach(doc => {
      events.push(<TcEvent>doc.data());
    });

    return events;
  }

  public async getUpcoming(): Promise<TcEvent[]> {
    let events: Array<TcEvent> = [];

    var eventsRef = this.afs.collection('events').ref;

    const data = await eventsRef.where('startTime', '>', Date.now.toString()).get();

    data.forEach(doc => {
      events.push(<TcEvent>doc.data());
    });

    return events;
  }

  public async getPast(): Promise<TcEvent[]> {
    let events: Array<TcEvent> = [];

    var eventsRef = this.afs.collection('events').ref;

    const data = await eventsRef.where('endTime', '<', Date.now.toString()).get();

    data.forEach(doc => {
      events.push(<TcEvent>doc.data());
    });

    return events;
  }

  public async getAll(): Promise<TcEvent[]> {
    let events: Array<TcEvent> = [];

    var eventsRef = this.afs.collection('events').ref;

    const data = await eventsRef.get();

    data.forEach(doc => {
      let event = <TcEvent>doc.data();
      if (event.allDayEvent) {
        let startDate = <firebase.firestore.Timestamp><unknown>event.startDate
        event.startDate = startDate.toDate();
        let endDate = <firebase.firestore.Timestamp><unknown>event.endDate
        event.endDate = endDate.toDate();
      } else {
        let startDateTime = <firebase.firestore.Timestamp><unknown>event.startDateTime
        event.startDateTime = startDateTime.toDate();
        let endDateTime = <firebase.firestore.Timestamp><unknown>event.endDateTime
        event.endDateTime = endDateTime.toDate();
      }
      events.push(event);
    });

    return events;
  }
}
