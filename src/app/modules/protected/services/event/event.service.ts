import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  internalCalendarId = 'jem0uc9vivub6u1elm3vqhcrco@group.calendar.google.com';
  externalCalendarId = 'jem0uc9vivub6u1elm3vqhcrco@group.calendar.google.com';
  alumniCalendarId = 'jem0uc9vivub6u1elm3vqhcrco@group.calendar.google.com';

  constructor(
    private functions: AngularFireFunctions
  ) {
    // this.functions.functions.useFunctionsEmulator('http://localhost:5001');
  }


  addEvent(event: Event): void {
    const data = {
      eventName: 'Test Event',
      description: 'Small test description.',
      startTime: "2020-01-04T10:00:00",
      endTime: "2020-01-04T13:00:00"
    }

    // var addCalendarEvent = this.functions.httpsCallable('addCalendarEvent');

    // addCalendarEvent(data).toPromise().then(res => {
    //   console.log("Added: ", res);
    // }).catch(err => {
    //   console.error("Failed to add: ", err);
    // });
  }

  removeEvent(eventId: string): void {
    if (!eventId) {
      return;
    }

  }


  getEvents(): Array<Event> {
    let events = new Array<Event>();
    const data = {
      calendarId: this.internalCalendarId
    };

    // var getCalendarEvents = this.functions.httpsCallable('getCalendarEvents');

    // getCalendarEvents(data).toPromise().then(res => {
    //   const items: any[] = res.data.items;

    //   items.forEach(e => {
    //     events.push({
    //       title: e.summary,
    //       description: e.description,
    //       startTime: e.start.dateTime,
    //       endTime: e.end.dateTime
    //     });
    //   });
    // }).catch(err => {
    //   console.error("Failed to retrieve events: ", err);
    // });
    return events;
  }
}
