import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { TcEvent } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  internalCalendarId = 'jem0uc9vivub6u1elm3vqhcrco@group.calendar.google.com';
  // externalCalendarId = '4uf4s1hvt90ne18q1vvvsljnps@group.calendar.google.com';
  // alumniCalendarId = '309rk3uhk1tp66pmmeu3p2kqk8@group.calendar.google.com';

  constructor(
    private functions: AngularFireFunctions,
    private afs: AngularFirestore
  ) {
    this.functions.functions.useFunctionsEmulator('http://localhost:5000');
    this.getAll();
  }

  getCalendaryIdFromEventType(eventType: string): string {
    // if (eventType === TcEventType.ALUMNI) {
    //   return this.alumniCalendarId;
    // }
    // if (eventType === TcEventType.PUBLIC || eventType === TcEventType.RECRUITMENT_PUBLIC || eventType === TcEventType.PARENT) {
    //   return this.externalCalendarId;
    // }
    return this.internalCalendarId;
  }

  addEvent(event: TcEvent): Promise<boolean> {
    const googleCalendarId = this.getCalendaryIdFromEventType(event.type);

    const googleCalendarData = {
      calendarId: googleCalendarId,
      title: event.title,
      description: event.description,
      location: event.location,
      allDayEvent: !!event.allDayEvent,
      startDateTime: event.startDateTime.toISOString(), //"2020-01-04T10:00:00",
      endDateTime: event.endDateTime.toISOString() //"2020-01-04T13:00:00"
    }

    if (event.allDayEvent) {
      googleCalendarData.startDateTime = moment(googleCalendarData.startDateTime, moment.ISO_8601).format("YYYY-MM-DD");
      googleCalendarData.endDateTime = moment(googleCalendarData.endDateTime, moment.ISO_8601).add(1, 'day').format("YYYY-MM-DD");
    }

    var addCalendarEvent = this.functions.httpsCallable('addCalendarEvent');

    return new Promise((resolve, reject) => {
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
          resolve(true);
        }).catch(err => {
          console.log('Failed to add event to db: ', err);
          resolve(false);
        });

      }).catch(err => {
        console.error("Failed to add event to calendar: ", err);
        resolve(false);
      });
    })
  }

  updateEvent(event: TcEvent): void {
    if (!event.id || !event.googleCalendarId || !event.googleEventId) {
      return;
    }

    let googleCalendarData = {
      calendarId: event.googleCalendarId,
      eventId: event.googleEventId,
      title: event.title,
      description: event.description,
      location: event.location,
      allDayEvent: !!event.allDayEvent,
      startDateTime: event.startDateTime.toISOString(), //"2020-01-04T10:00:00",
      endDateTime: event.endDateTime.toISOString() //"2020-01-04T13:00:00"
    }

    if (event.allDayEvent) {
      googleCalendarData.startDateTime = moment(googleCalendarData.startDateTime, moment.ISO_8601).format("YYYY-MM-DD");
      googleCalendarData.endDateTime = moment(googleCalendarData.endDateTime, moment.ISO_8601).add(1, 'day').format("YYYY-MM-DD");
    }

    var updateCalendarEvent = this.functions.httpsCallable('updateCalendarEvent');

    updateCalendarEvent(googleCalendarData).toPromise().then(res => {
      console.log("Updated calendar event: ", res);

      const eventRef: AngularFirestoreDocument<any> = this.afs.doc(`events/${event.id}`);

      const obj = Object.assign({}, event);
      eventRef.set(obj, { merge: true }).then(() => {
        console.log('Updated event in db.');
      }).catch(err => {
        console.log('Failed to update event in db: ', err);
      });

    }).catch(err => {
      console.error("Failed to update event in calendar: ", err);
    });
  }

  removeEvent(event: TcEvent): void {
    if (!event || !event.id || !event.googleCalendarId || !event.googleEventId) {
      return;
    }

    const data = {
      id: event.id,
      calendarId: event.googleCalendarId,
      eventId: event.googleEventId
    };

    var deleteCalendarEvent = this.functions.httpsCallable('deleteCalendarEvent');

    deleteCalendarEvent(data).toPromise().then(res => {
      console.log("Deleted calendar event: ", data);
      const attendanceId = event.attendanceId;

      const eventRef: AngularFirestoreDocument<any> = this.afs.doc(`events/${data.id}`);

      eventRef.delete().then(() => {
        console.log('Deleted db entry.');
      }).catch(err => {
        console.log('Failed to delete db entry: ', err);
      });

    }).catch(err => {
      console.error("Failed to delete event from calendar: ", err);
    });
  }

  public async getEvents(startDateTime: Date, endDateTime: Date, inclusive = true): Promise<TcEvent[]> {
    var eventsRef = this.afs.collection('events').ref;

    const data = await eventsRef.orderBy('startDateTime')
      .where('startDateTime', '>=', firebase.firestore.Timestamp.fromDate(startDateTime))
      .where('startDateTime', inclusive ? '<=' : '<', firebase.firestore.Timestamp.fromDate(endDateTime))
      .get();

    let events: Array<TcEvent> = [];
    data.forEach((result) => {
      events.push(this.convertDocToEvent(result.data()));
    });

    return events;
  }

  public readonly events = new BehaviorSubject<Array<TcEvent>>(undefined);


  private convertDocToEvent(doc: any): TcEvent {
    let event = <TcEvent>doc;
    let startDateTime = <firebase.firestore.Timestamp><unknown>event.startDateTime
    event.startDateTime = startDateTime.toDate();
    let endDateTime = <firebase.firestore.Timestamp><unknown>event.endDateTime
    event.endDateTime = endDateTime.toDate();
    return event;
  }

  private getAll(): void {
    var eventsRef = this.afs.collection('events').ref;

    eventsRef.onSnapshot(
      (onNext) => {
        console.log('eventsRef snapshot changed: ', onNext);

        let newEvents = new Array<TcEvent>();
        onNext.docs.forEach(doc => {
          newEvents.push(this.convertDocToEvent(doc.data()));
        });

        this.events.next(newEvents);
      },
      (onError) => {
        console.log('eventsRef snapshot errored: ', onError);
      },
      () => {
        console.log('eventsRef snapshot completed...');
      }
    );
  }
}
