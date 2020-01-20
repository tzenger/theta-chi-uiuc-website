import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemberAttendance, TcEventAttendance } from '../../services/attendance/attendance.model';
import { AttendanceService } from '../../services/attendance/attendance.service';
import { TcEvent, TcEventAttendanceLevel } from '../../services/event/event.model';
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
  private eventsSubscription: Subscription;

  selectedAttendance: TcEventAttendance;
  selectedAttendanceSubscription: Subscription;
  selectedEvent: TcEvent;

  constructor(
    private memberService: MemberService,
    private eventService: EventService,
    private attendanceService: AttendanceService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.eventsSubscription = this.eventService.events.subscribe(
      {
        next: (nextEvents) => {
          this.events = nextEvents;
          this.cdRef.detectChanges();
        }
      }
    );
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    if (this.selectedAttendanceSubscription) {
      this.selectedAttendanceSubscription.unsubscribe();
    }
  }

  selectedEventChanged() {
    if (this.selectedAttendanceSubscription) {
      this.selectedAttendanceSubscription.unsubscribe();
    }

    this.selectedAttendance = undefined;
    if (this.selectedEvent.attendanceId) {
      this.selectedAttendanceSubscription = this.attendanceService.getAttendanceById(this.selectedEvent.attendanceId).subscribe({
        next: (nextAttendnace) => {
          this.selectedAttendance = nextAttendnace;
          this.cdRef.detectChanges();
        }
      })
    }
  }

  private isRequired(member: Member, attendanceLevel: string): boolean {
    if (attendanceLevel === TcEventAttendanceLevel.EVERYONE) {
      return true;
    } else if (attendanceLevel === TcEventAttendanceLevel.ALL_INITIATED) {
      return member.chapterStatus === MemberChapterStatus.ACTIVE;
    } else if (attendanceLevel === TcEventAttendanceLevel.ALL_INITIATED_NON_SENIORS) {
      return member.chapterStatus === MemberChapterStatus.ACTIVE && member.class !== MemberSchoolClass.SENIOR;
    } else if (attendanceLevel === TcEventAttendanceLevel.LIVE_INS_ONLY) {
      return member.livingIn;
    } else if (attendanceLevel === TcEventAttendanceLevel.LAST_TWO_PLEDGE_CLASSES) {
      return member.pledgeClass === MemberPledgeClass.BETA_LAMBDA || member.pledgeClass === MemberPledgeClass.BETA_KAPPA;
    } else if (attendanceLevel === TcEventAttendanceLevel.PLEDGES_ONLY) {
      return member.pledgeClass === MemberPledgeClass.BETA_LAMBDA;
    } else if (attendanceLevel === TcEventAttendanceLevel.OPTIONAL) {
      return false;
    } else {
      return false;
    }
  }

  eventIsToday(event: TcEvent) {
    return moment(event.startDateTime).isSame(moment.now(), 'date');
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
