import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemberAttendance, TcEventAttendance } from '../../services/attendance/attendance.model';
import { AttendanceService } from '../../services/attendance/attendance.service';
import { TcEvent, TcEventAttendanceLevel, TcWeek, tcWeeks } from '../../services/event/event.model';
import { EventService } from '../../services/event/event.service';
import { Member, MemberChapterStatus, MemberPledgeClass, MemberSchoolClass } from '../../services/member/member.model';
import { MemberService } from '../../services/member/member.service';
import * as moment from 'moment';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit, OnDestroy {
  events: TcEvent[];
  weeks: TcWeek[] = tcWeeks;
  showAdvancedView: boolean = true;
  // private eventsSubscription: Subscription;

  selectedAttendance: TcEventAttendance;
  selectedAttendanceSubscription: Subscription;
  selectedWeek: TcWeek;
  selectedEvent: TcEvent;

  constructor(
    private memberService: MemberService,
    private eventService: EventService,
    private attendanceService: AttendanceService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // this.eventsSubscription = this.eventService.events.subscribe(
    //   {
    //     next: (nextEvents) => {
    //       this.events = nextEvents;
    //       this.cdRef.detectChanges();
    //     }
    //   }
    // );
  }

  ngOnDestroy() {
    // this.eventsSubscription.unsubscribe();
    if (this.selectedAttendanceSubscription) {
      this.selectedAttendanceSubscription.unsubscribe();
    }
  }

  toggleAdvancedView() {
    this.showAdvancedView = !this.showAdvancedView;
  }

  selectedWeekChanged() {
    this.selectedEvent = undefined;
    this.selectedEventChanged();
    this.events = undefined;
    if (this.selectedWeek) {
      this.eventService.getEvents(this.selectedWeek.startDateTime, this.selectedWeek.endDateTime, true).then(events => {
        this.events = events;
      });
    }
  }

  selectedEventChanged() {
    if (this.selectedAttendanceSubscription) {
      this.selectedAttendanceSubscription.unsubscribe();
    }

    this.showAdvancedView = true;
    this.selectedAttendance = undefined;
    if (this.selectedEvent && this.selectedEvent.attendanceId) {
      this.selectedAttendanceSubscription = this.attendanceService.getAttendanceById(this.selectedEvent.attendanceId).subscribe({
        next: (nextAttendnace) => {
          // nextAttendnace.members.sort((a, b) => {
          //   return (a.required === b.required) ? 0 : (a.required ? 1 : -1);
          // });
          this.selectedAttendance = nextAttendnace;
          this.cdRef.detectChanges();
        }
      })
    }
  }

  private isRequired(member: Member, attendanceLevel: string): boolean {
    switch (attendanceLevel) {
      case TcEventAttendanceLevel.EVERYONE:
        return true;
      case TcEventAttendanceLevel.ALL_INITIATED:
        return member.chapterStatus === MemberChapterStatus.ACTIVE && member.chapterPosition !== "Pledge";
      case TcEventAttendanceLevel.ALL_INITIATED_NON_SENIORS:
        return member.chapterStatus === MemberChapterStatus.ACTIVE && member.schoolEndTerm !== "Spring 2020";
      case TcEventAttendanceLevel.LIVE_INS_ONLY:
        return member.livingIn;
      case TcEventAttendanceLevel.LAST_TWO_PLEDGE_CLASSES:
        return member.pledgeClass === MemberPledgeClass.BETA_MU || member.pledgeClass === MemberPledgeClass.BETA_LAMBDA;
      case TcEventAttendanceLevel.PLEDGES_ONLY:
        return member.pledgeClass === MemberPledgeClass.BETA_MU;
      case TcEventAttendanceLevel.LIVE_INS_TUESDAY_HOUSE_JOB:
        return !!member.tuesdayHouseJob;
      case TcEventAttendanceLevel.LIVE_INS_THURSDAY_HOUSE_JOB:
        return !!member.thursdayHouseJob;
      case TcEventAttendanceLevel.COMMITTEE_MEMBERS:
        return this.isOnCommittee(member.chapterPosition);
      case TcEventAttendanceLevel.OPTIONAL:
        return false;
    }
  }

  private isOnCommittee(position: string): boolean {
    return position !== 'Social Chair' && position.endsWith(' Chair');
  }

  eventIsToday(event: TcEvent) {
    return moment(event.startDateTime).isSame(moment.now(), 'date');
  }

  isCurrentWeek(week: TcWeek) {
    return moment(week.startDateTime).isSameOrBefore(moment.now(), 'date') && moment(week.endDateTime).isSameOrAfter(moment.now(), 'date');
  }

  deleteAttendance() {
    if (!this.selectedAttendance) {
      return;
    }

    this.eventService.removeEventAttendance(this.selectedEvent);
    const id = this.selectedAttendance.id;
    this.selectedAttendance = undefined;
    this.attendanceService.removeAttendance(id);
  }

  createAttendance() {
    if (!this.selectedEvent) {
      return;
    }

    this.memberService.getAll().then(members => {
      members = members.filter((m) => m.chapterStatus === 'Active');
      members.sort((a, b) => a.lastName.localeCompare(b.lastName));

      let membersList = members.map(m => {
        const ma: MemberAttendance = {
          memberId: m.id,
          firstName: m.firstName,
          lastName: m.lastName,
          preferredName: m.preferredName,
          required: this.isRequired(m, this.selectedEvent.attendanceLevel),
          attended: false,
          excused: false,
          excuse: ''
        };

        return ma;
      });

      membersList.sort((a, b) => {
        return (a.required === b.required) ? 0 : (a.required ? -1 : 1);
      });

      this.selectedAttendance = {
        startDateTime: new Date(Date.now()),
        eventId: this.selectedEvent.id,
        eventTitle: this.selectedEvent.title,
        eventStartDateTime: this.selectedEvent.startDateTime,
        eventEndDateTime: this.selectedEvent.endDateTime,
        eventAttendanceLevel: this.selectedEvent.attendanceLevel,
        eventFineAmount: this.selectedEvent.fineAmount,
        members: membersList
      }

      // add attendance to db and update selectedEvent.attendanceId
      this.attendanceService.addAttendance(this.selectedAttendance, this.selectedEvent);
      console.log('Successfully created attendance.');
    });
  }

  private getOldMemberAttendance(om: Member, mas: MemberAttendance[]): MemberAttendance {
    for (let ma of mas) {
      if (ma.memberId === om.id) {
        return ma;
      }
    }
    return undefined;
  }

  updateAttendanceInfo() {
    if (!this.selectedAttendance) {
      return;
    }


    this.memberService.getAll().then(members => {
      members = members.filter((m) => m.chapterStatus === 'Active');
      members.sort((a, b) => a.lastName.localeCompare(b.lastName));

      let membersList = members.map(m => {
        const oldMA = this.getOldMemberAttendance(m, this.selectedAttendance.members);
        console.log(oldMA)
        const ma: MemberAttendance = {
          memberId: m.id,
          firstName: m.firstName,
          lastName: m.lastName,
          preferredName: m.preferredName,
          required: this.isRequired(m, this.selectedEvent.attendanceLevel),
          attended: oldMA ? oldMA.attended : false,
          excused: oldMA ? oldMA.excused : false,
          excuse: oldMA ? oldMA.excuse : ''
        };

        return ma;
      });

      membersList.sort((a, b) => {
        return (a.required === b.required) ? 0 : (a.required ? -1 : 1);
      });

      this.selectedAttendance.eventTitle = this.selectedEvent.title;
      this.selectedAttendance.eventStartDateTime = this.selectedEvent.startDateTime;
      this.selectedAttendance.eventEndDateTime = this.selectedEvent.endDateTime;
      this.selectedAttendance.eventAttendanceLevel = this.selectedEvent.attendanceLevel;
      this.selectedAttendance.eventFineAmount = this.selectedEvent.fineAmount;
      this.selectedAttendance.members = membersList;

      console.log(this.selectedAttendance);

      this.attendanceService.updateAttendance(this.selectedAttendance);
      console.log('Successfully updated attendance.');
    });
  }

  updateAttendance() {
    if (!this.selectedAttendance) {
      return;
    }

    this.attendanceService.updateAttendance(this.selectedAttendance);
  }

  updateExcuse() {
    this.updateAttendance();
  }

  toggleAttendance(ma: MemberAttendance) {
    ma.attended = !ma.attended;
    this.updateAttendance();
  }
}
