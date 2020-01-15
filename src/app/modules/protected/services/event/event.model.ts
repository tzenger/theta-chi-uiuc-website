export enum EventCategory {
  CHAPTER = 'Chapter',
  SOCIAL = 'Social',
  BROTHERHOOD = 'Brotherhood',
  PHILANTHROPY = 'Philanthropy',
  ALUMNI_PARENT = 'Alumni/Parent',
  RECRUITMENT_PUBLIC = 'Recruitment (public)',
  RECRUITMENT_PRIVATE = 'Recruitment (private)',
  OTHER = 'Other'
};

export enum EventAttendanceLevel {
  EVERYONE = 'Everyone',
  ALL_INITIATED = 'All Initiated',
  LIVE_INS_ONLY = 'Live-Ins Only',
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
    startDateTime?: Date;
    endDateTime?: Date;
    startDate?: Date;
    endDate?: Date;
    allDayEvent?: boolean;
    location?: string;
    fineAmount?: number;
    attendanceLevel?: string;
    category?: string;
}
