import * as functions from 'firebase-functions';
import { googleCreds } from './credentials';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const { google } = require('googleapis');
const calendar = google.calendar('v3');
const OAuth2 = google.auth.OAuth2;
const TIME_ZONE = 'US/Central';

interface CalendarEventData {
    calendarId: string;
    eventId?: string;
    title: string;
    description: string;
    startTime: firebase.firestore.Timestamp;
    endTime: firebase.firestore.Timestamp;
    location?: string;
}

export const addCalendarEvent = functions.https.onCall((data: CalendarEventData, context) => {
    const oAuth2Client = new OAuth2(googleCreds.web.client_id, googleCreds.web.client_secret, googleCreds.web.redirect_uris[0]);

    oAuth2Client.setCredentials({
        refresh_token: googleCreds.refresh_token
    });

    return new Promise((resolve, reject) => {
        calendar.events.insert({
            auth: oAuth2Client,
            calendarId: data.calendarId,
            resource: {
                'summary': data.title,
                'description': data.description,
                'start': {
                    'dateTime': data.startTime,
                    'timeZone': TIME_ZONE
                },
                'end': {
                    'dateTime': data.endTime,
                    'timeZone': TIME_ZONE
                },
            }
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

    calendar.events.update({
        auth: oAuth2Client,
        calendarId: data.calendarId,
        eventId: data.eventId,
        resource: {
            'summary': data.title,
            'description': data.description,
            'start': {
                'dateTime': data.startTime,
                'timeZone': TIME_ZONE
            },
            'end': {
                'dateTime': data.endTime,
                'timeZone': TIME_ZONE
            },
        }
    }, (err: any, res: any) => {
        if (err) {
            console.log('Rejecting because of error.', err);
        }
        console.log('Request successful!', res);
        return res;
    });
});

export const deleteCalendarEvent = functions.https.onCall((data: { calendarId: string; eventId: string; }, context) => {
    const oAuth2Client = new OAuth2(googleCreds.web.client_id, googleCreds.web.client_secret, googleCreds.web.redirect_uris[0]);

    oAuth2Client.setCredentials({
        refresh_token: googleCreds.refresh_token
    });

    calendar.events.delete({
        auth: oAuth2Client,
        calendarId: data.calendarId,
        eventId: data.eventId
    }, (err: any, res: any) => {
        if (err) {
            console.log('Rejecting because of error.', err);
        }
        console.log('Request successful!', res);
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