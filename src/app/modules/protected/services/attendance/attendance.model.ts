export class TcEventAttendance {
  id?: string;
  startDateTime: Date;
  eventId: string;
  eventTitle: string;
  eventStartDateTime: Date;
  eventEndDateTime: Date;
  eventFineAmount: number;
  eventAttendanceLevel: string;
  members: MemberAttendance[];
}

export class MemberAttendance {
  memberId: string;
  firstName: string;
  lastName: string;
  preferredName: string;
  required: boolean;
  attended: boolean;
  excused: boolean;
  excuse: string;
}