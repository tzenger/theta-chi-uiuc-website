import { Component, OnInit } from '@angular/core';
import { TcEventAttendance } from '../../services/attendance/attendance.model';
import { AttendanceService } from '../../services/attendance/attendance.service';

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
  events: TcEventAttendance[];
}

// Monday to Sunday (inclusive); 17 total weeks
export const weeklyFineReports: FineReport[] = [
  { status: FineReportStatus.FUTURE, startDate: new Date('1/20/2020'), endDate: new Date('1/26/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('1/27/2020'), endDate: new Date('2/2/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('2/3/2020'), endDate: new Date('2/9/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('2/10/2020'), endDate: new Date('2/16/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('2/17/2020'), endDate: new Date('2/23/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('2/24/2020'), endDate: new Date('3/1/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('3/2/2020'), endDate: new Date('3/8/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('3/9/2020'), endDate: new Date('3/15/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('3/16/2020'), endDate: new Date('3/22/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('3/23/2020'), endDate: new Date('3/29/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('3/30/2020'), endDate: new Date('4/5/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('4/6/2020'), endDate: new Date('4/12/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('4/13/2020'), endDate: new Date('4/19/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('4/20/2020'), endDate: new Date('4/26/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('4/27/2020'), endDate: new Date('5/3/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('5/4/2020'), endDate: new Date('5/10/2020'), events: new Array<TcEventAttendance>() },
  { status: FineReportStatus.FUTURE, startDate: new Date('5/11/2020'), endDate: new Date('5/17/2020'), events: new Array<TcEventAttendance>() },
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
    private attendanceService: AttendanceService
  ) { }

  ngOnInit() {
    this.weeklyFineReports = weeklyFineReports;
  }

  generateFineReports() {
    this.weeklyFineReports = new Array<FineReport>();
  }
}
