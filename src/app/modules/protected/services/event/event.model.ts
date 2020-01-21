export enum TcEventType {
  CHAPTER = 'Chapter',
  COMMITTEE_MEETING = 'Committee Meeting',
  CHAPTER_FORMAL = 'Formal Chapter',
  CHAPTER_ELECTION = 'Chapter (elections)',
  WORKSHOP = 'Workshop',
  CONFERENCE = 'Conference',
  SETUP = 'Setup',
  CLEANUP = 'Cleanup',
  HOUSE_JOB = 'House Job',
  PLEDGE_CLASS = 'Pledge Class',
  SOCIAL = 'Social',
  BROTHERHOOD = 'Brotherhood',
  PHILANTHROPY = 'Philanthropy',
  ALUMNI = 'Alumni',
  PARENT = 'Parent',
  PUBLIC = 'Public',
  RECRUITMENT_PUBLIC = 'Recruitment (public)',
  RECRUITMENT_PRIVATE = 'Recruitment (private)',
  INITIATION = 'Initiation',
  I_WEEK = 'I-Week',
  OTHER = 'Other'
};

export enum TcEventAttendanceLevel {
  EVERYONE = 'Everyone',
  ALL_INITIATED = 'All Initiated',
  ALL_INITIATED_NON_SENIORS = 'Non-seniors (initiated)',
  COMMITTEE_MEMBERS = 'Committee Members',
  LIVE_INS_ONLY = 'Live-Ins Only',
  LIVE_INS_TUESDAY_HOUSE_JOB = 'Live-Ins w/ Tuesday House Jobs',
  LIVE_INS_THURSDAY_HOUSE_JOB = 'Live-Ins w/ Thursday House Jobs',
  PLEDGES_ONLY = 'Pledges Only',
  LAST_TWO_PLEDGE_CLASSES = 'Last 2 Pledge Classes',
  OPTIONAL = 'Optional'
};

export class TcEvent {
  id?: string;
  googleEventId?: string;
  googleCalendarId?: string;
  title: string;
  description?: string;
  startDateTime: Date;
  endDateTime: Date;
  allDayEvent?: boolean;
  location?: string;
  fineAmount: number;
  attendanceLevel: string;
  type?: string;
  attendanceId?: string;
}
