import * as functions from 'firebase-functions';
import { googleCreds } from './credentials';

const { google } = require('googleapis');
const calendar = google.calendar('v3');
const OAuth2 = google.auth.OAuth2;
const TIME_ZONE = 'US/Central';

interface CalendarEventData {
    calendarId: string;
    eventId?: string;
    title: string;
    description: string;
    startDateTime: string;
    endDateTime: string;
    allDayEvent?: boolean;
    location?: string;
}

export const addCalendarEvent = functions.https.onCall((data: CalendarEventData, context) => {
    const oAuth2Client = new OAuth2(googleCreds.web.client_id, googleCreds.web.client_secret, googleCreds.web.redirect_uris[0]);

    oAuth2Client.setCredentials({
        refresh_token: googleCreds.refresh_token
    });

    return new Promise((resolve, reject) => {

        const resource = {
            'summary': data.title,
            'description': data.description,
            'location': data.location,
            'reminders': {
                'useDefault': true
            },
            'start': {},
            'end': {}
        };

        if (data.allDayEvent) {
            resource['start'] = {
                'date': data.startDateTime,
                'timeZone': TIME_ZONE
            };
            resource['end'] = {
                'date': data.endDateTime,
                'timeZone': TIME_ZONE
            };
        } else {
            resource['start'] = {
                'dateTime': data.startDateTime,
                'timeZone': TIME_ZONE
            };
            resource['end'] = {
                'dateTime': data.endDateTime,
                'timeZone': TIME_ZONE
            };
        }

        console.log("Resource: ", resource);

        calendar.events.insert({
            auth: oAuth2Client,
            calendarId: data.calendarId,
            resource: resource
        }, (err: any, res: any) => {
            if (err) {
                console.log('Rejecting because of error.', err);
                reject(err);
            }
            console.log('Request successful!', res);
            resolve(res);
        });
    });

});

export const updateCalendarEvent = functions.https.onCall((data: CalendarEventData, context) => {
    const oAuth2Client = new OAuth2(googleCreds.web.client_id, googleCreds.web.client_secret, googleCreds.web.redirect_uris[0]);

    oAuth2Client.setCredentials({
        refresh_token: googleCreds.refresh_token
    });

    return new Promise((resolve, reject) => {

        const resource = {
            'summary': data.title,
            'description': data.description,
            'location': data.location,
            'reminders': {
                'useDefault': true
            },
            'start': {},
            'end': {}
        };

        if (data.allDayEvent) {
            resource['start'] = {
                'date': data.startDateTime,
                'timeZone': TIME_ZONE
            };
            resource['end'] = {
                'date': data.endDateTime,
                'timeZone': TIME_ZONE
            };
        } else {
            resource['start'] = {
                'dateTime': data.startDateTime,
                'timeZone': TIME_ZONE
            };
            resource['end'] = {
                'dateTime': data.endDateTime,
                'timeZone': TIME_ZONE
            };
        }

        console.log("Resource: ", resource);

        calendar.events.update({
            auth: oAuth2Client,
            calendarId: data.calendarId,
            eventId: data.eventId,
            resource: resource
        }, (err: any, res: any) => {
            if (err) {
                console.log('Rejecting because of error.', err);
                reject(err);
            }
            console.log('Request successful!', res);
            resolve(res);
        });
    });
});

export const deleteCalendarEvent = functions.https.onCall((data: { calendarId: string; eventId: string; }, context) => {
    const oAuth2Client = new OAuth2(googleCreds.web.client_id, googleCreds.web.client_secret, googleCreds.web.redirect_uris[0]);

    oAuth2Client.setCredentials({
        refresh_token: googleCreds.refresh_token
    });

    return new Promise((resolve, reject) => {
        calendar.events.delete({
            auth: oAuth2Client,
            calendarId: data.calendarId,
            eventId: data.eventId
        }, (err: any, res: any) => {
            if (err) {
                console.log('Rejecting because of error.', err);
                reject(err);
            }
            console.log('Request successful!', res);
            resolve(res);
        });
    });
});


// export const getCalendarEvents = functions.https.onCall((data, context) => {
//     const oAuth2Client = new OAuth2(googleCreds.web.client_id, googleCreds.web.client_secret, googleCreds.web.redirect_uris[0]);

//     oAuth2Client.setCredentials({
//         refresh_token: googleCreds.refresh_token
//     });

//     return new Promise((resolve, reject) => {
//         calendar.events.list({
//             auth: oAuth2Client,
//             calendarId: 'jem0uc9vivub6u1elm3vqhcrco@group.calendar.google.com'
//         }, (err: any, res: any) => {
//             if (err) {
//                 console.log('Rejecting because of error.', err);
//                 reject(err);
//             } else {
//                 console.log('Request successful!');
//                 resolve(res);
//             }
//         });
//     });
// });