import { Component, OnInit } from '@angular/core';
import { TcEventAttendance, MemberAttendance } from '../../services/attendance/attendance.model';
import { AttendanceService } from '../../services/attendance/attendance.service';
import { EventService } from '../../services/event/event.service';
import { TcEvent } from '../../services/event/event.model';

export enum FineReportStatus {
  FUTURE = "Future",
  CURRENT = "Current",
  PENDING = "Pending",
  FINALIZED = "Finalized"
}

export class FineReport {
  status: string;
  startDate: Date;
  endDate: Date;
  events: TcEvent[];
  attendances: TcEventAttendance[];
  table?: Array<{
    last: string;
    first: string;
    attendanceValue: string[];
    fineTotal: number
  }>;
}

// Monday to Sunday (inclusive); 17 total weeks
export const weeklyFineReports: FineReport[] = [
  { status: FineReportStatus.PENDING, startDate: new Date('1/20/2020'), endDate: new Date('1/26/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.CURRENT, startDate: new Date('1/27/2020'), endDate: new Date('2/2/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('2/3/2020'), endDate: new Date('2/9/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('2/10/2020'), endDate: new Date('2/16/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('2/17/2020'), endDate: new Date('2/23/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('2/24/2020'), endDate: new Date('3/1/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('3/2/2020'), endDate: new Date('3/8/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('3/9/2020'), endDate: new Date('3/15/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('3/16/2020'), endDate: new Date('3/22/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('3/23/2020'), endDate: new Date('3/29/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('3/30/2020'), endDate: new Date('4/5/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('4/6/2020'), endDate: new Date('4/12/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('4/13/2020'), endDate: new Date('4/19/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('4/20/2020'), endDate: new Date('4/26/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('4/27/2020'), endDate: new Date('5/3/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('5/4/2020'), endDate: new Date('5/10/2020'), events: undefined, attendances: undefined },
  { status: FineReportStatus.FUTURE, startDate: new Date('5/11/2020'), endDate: new Date('5/17/2020'), events: undefined, attendances: undefined },
]

@Component({
  selector: 'app-fine-reports',
  templateUrl: './fine-reports.component.html',
  styleUrls: ['./fine-reports.component.scss']
})
export class FineReportsComponent implements OnInit {

  weeklyFineReports: FineReport[];
  selectedReport: FineReport;

  constructor(
    private attendanceService: AttendanceService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.weeklyFineReports = weeklyFineReports;
  }

  generateFineReportTable() {
    if (!this.selectedReport.attendances) {
      return;
    }

    let table = new Array<{
      last: string;
      first: string;
      attendanceValue: string[];
      fineTotal: number
    }>();

    let mIds = new Set<string>();

    let mAV = new Map<string, string[]>();
    let mRequired = new Map<string, boolean>();
    let mFirst = new Map<string, string>();
    let mLast = new Map<string, string>();
    let mFineTotal = new Map<string, number>();

    this.selectedReport.attendances.forEach(a => {
      a.members.forEach(ma => {
        if (!mIds.has(ma.memberId)) {

          mIds.add(ma.memberId);
          mFirst.set(ma.memberId, ma.preferredName);
          mLast.set(ma.memberId, ma.lastName);
          mFineTotal.set(ma.memberId, 0);
        }
      });
    });

    mIds.forEach(maId => {
      mAV.set(maId, new Array<string>());
    });

    this.selectedReport.attendances.forEach(a => {
      mIds.forEach(maId => {
        mAV.get(maId).push('-');
      });

      a.members.forEach(ma => {
        if (ma.required) {
          if (!ma.attended) {
            if (ma.excused) {
              mAV.get(ma.memberId).pop();
              mAV.get(ma.memberId).push('E');
            } else {
              mAV.get(ma.memberId).pop();
              mAV.get(ma.memberId).push('F');
              mFineTotal.set(ma.memberId, mFineTotal.get(ma.memberId) + a.eventFineAmount);
            }
          } else {
            mAV.get(ma.memberId).pop();
            mAV.get(ma.memberId).push(' ');
          }
        } else {
          if (ma.attended) {
            mAV.get(ma.memberId).pop();
            mAV.get(ma.memberId).push('P');
          } else {
            mAV.get(ma.memberId).pop();
            mAV.get(ma.memberId).push(' ');
          }
        }
      });
    });

    mIds.forEach(mId => {
      table.push({
        last: mLast.get(mId),
        first: mFirst.get(mId),
        attendanceValue: mAV.get(mId),
        fineTotal: mFineTotal.get(mId),
      });
    });

    table.sort((a, b) => a.last.localeCompare(b.last));

    this.selectedReport.table = table;
  }

  selectedReportChanged() {
    if (!this.selectedReport) {
      return;
    }

    this.eventService.getEvents(this.selectedReport.startDate, this.selectedReport.endDate).then(events => {
      this.selectedReport.events = events;

      this.attendanceService.getAttendances(this.selectedReport.startDate, this.selectedReport.endDate).then(attendances => {
        this.selectedReport.attendances = attendances;

        this.generateFineReportTable();
      });
    });
  }

}
