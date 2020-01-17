import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemberAttendance, TcEventAttendance } from '../../services/attendance/attendance.model';
import { AttendanceService } from '../../services/attendance/attendance.service';
import { TcEvent } from '../../services/event/event.model';
import { EventService } from '../../services/event/event.service';
import { MemberService } from '../../services/member/member.service';

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
          console.log('hi2', nextAttendnace);
          this.selectedAttendance = nextAttendnace;
          this.cdRef.detectChanges();
        }
      })
    }
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
          required: false,
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
