import * as functions from 'firebase-functions';
import { googleCreds } from './credentials';
const { google } = require('googleapis');
const calendar = google.calendar('v3');
const OAuth2 = google.auth.OAuth2;
const TIME_ZONE = 'US/Central';

export const addCalendarEvent = functions.https.onCall((data, context) => {
    const oAuth2Client = new OAuth2(googleCreds.web.client_id, googleCreds.web.client_secret, googleCreds.web.redirect_uris[0]);

    oAuth2Client.setCredentials({
        refresh_token: googleCreds.refresh_token
    });

    calendar.events.insert({
        auth: oAuth2Client,
        calendarId: 'jem0uc9vivub6u1elm3vqhcrco@group.calendar.google.com',
        resource: {
            'summary': data.eventName,
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
            console.log('Rejecting because of error.');
        }
        console.log('Request successful!');
    });
});


export const getCalendarEvents = functions.https.onCall((data, context) => {
    const oAuth2Client = new OAuth2(googleCreds.web.client_id, googleCreds.web.client_secret, googleCreds.web.redirect_uris[0]);

    oAuth2Client.setCredentials({
        refresh_token: googleCreds.refresh_token
    });

    return new Promise((resolve, reject) => {
        calendar.events.list({
            auth: oAuth2Client,
            calendarId: 'jem0uc9vivub6u1elm3vqhcrco@group.calendar.google.com'
        }, (err: any, res: any) => {
            if (err) {
                console.log('Rejecting because of error.', err);
                reject(err);
            } else {
                console.log('Request successful!');
                resolve(res);
            }
        });
    });
});