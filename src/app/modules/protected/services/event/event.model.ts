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

export enum TcWeekStatus {
  FUTURE = "Future",
  CURRENT = "Current",
  PENDING = "Pending",
  FINALIZED = "Finalized"
}

export class TcWeek {
  name: string;
  startDateTime: Date;
  endDateTime: Date;
  status: TcWeekStatus;
}

export const tcWeeks: TcWeek[] = [
  { status: TcWeekStatus.PENDING, startDateTime: new Date('1/20/2020'), endDateTime: new Date('1/26/2020'), name: 'Week 01' },
  { status: TcWeekStatus.CURRENT, startDateTime: new Date('1/27/2020'), endDateTime: new Date('2/2/2020'), name: 'Week 02' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('2/3/2020'), endDateTime: new Date('2/9/2020'), name: 'Week 03' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('2/10/2020'), endDateTime: new Date('2/16/2020'), name: 'Week 04' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('2/17/2020'), endDateTime: new Date('2/23/2020'), name: 'Week 05' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('2/24/2020'), endDateTime: new Date('3/1/2020'), name: 'Week 06' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('3/2/2020'), endDateTime: new Date('3/8/2020'), name: 'Week 07' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('3/9/2020'), endDateTime: new Date('3/15/2020'), name: 'Week 08' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('3/16/2020'), endDateTime: new Date('3/22/2020'), name: 'Week 09' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('3/23/2020'), endDateTime: new Date('3/29/2020'), name: 'Week 10' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('3/30/2020'), endDateTime: new Date('4/5/2020'), name: 'Week 11' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('4/6/2020'), endDateTime: new Date('4/12/2020'), name: 'Week 12' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('4/13/2020'), endDateTime: new Date('4/19/2020'), name: 'Week 13' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('4/20/2020'), endDateTime: new Date('4/26/2020'), name: 'Week 14' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('4/27/2020'), endDateTime: new Date('5/3/2020'), name: 'Week 15' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('5/4/2020'), endDateTime: new Date('5/10/2020'), name: 'Week 16' },
  { status: TcWeekStatus.FUTURE, startDateTime: new Date('5/11/2020'), endDateTime: new Date('5/17/2020'), name: 'Week 17' },
]

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
