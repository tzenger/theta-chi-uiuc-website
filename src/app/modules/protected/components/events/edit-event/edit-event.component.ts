import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DlDateTimePickerChange } from 'angular-bootstrap-datetimepicker';
import { TcEvent, TcEventAttendanceLevel, TcEventType } from '../../../services/event/event.model';
import { EventService } from '../../../services/event/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit, OnChanges {
  @Input() eventToEdit: TcEvent;
  event: TcEvent;
  selectedDate: any;
  duration: string;
  eventTypes = Object.values(TcEventType);
  attendanceLevels = Object.values(TcEventAttendanceLevel);

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.resetEvent();
    if (this.eventToEdit) {
      Object.assign(this.event, this.eventToEdit);
    }
  }

  ngOnChanges() {
    this.resetEvent();
    if (this.eventToEdit) {
      Object.assign(this.event, this.eventToEdit);
    }
  }

  addEvent(): void {
    console.log('Add event: ', this.event);
    if (this.eventIsInvalid()) {
      console.log('Failed to add event: invalid event');
      return;
    }

    this.eventService.addEvent(this.event).then(successful => {
      if (successful) {
        this.resetEvent();
      }
    });
  }

  updateEvent(): void {
    console.log('Update event: ', this.event);
    if (this.eventIsInvalid()) {
      console.log('Failed to update event: invalid event');
      return;
    }
    this.eventService.updateEvent(this.event);
  }

  eventIsInvalid(): boolean {
    const valid = this.event.title && this.event.attendanceLevel && this.event.fineAmount >= 0 && this.event.startDateTime && this.event.endDateTime && this.event.startDateTime <= this.event.endDateTime;
    return !valid;
  }

  clearDateTimeValues(): void {
    this.event.startDateTime = undefined;
    this.event.endDateTime = undefined;
    if (!this.event.allDayEvent) {
      this.event.allDayEvent = false;
    }
    this.duration = 'N/A';
  }

  private resetEvent(): void {
    this.event = new TcEvent();
    this.clearDateTimeValues();
  }

  startDateTimeChanged(event: DlDateTimePickerChange<Date>) {
    this.event.startDateTime = event.value;
    if (this.event.allDayEvent) {
      this.setDurationDate();
    } else {
      this.setDurationDateTime();
    }
  }

  endDateTimeChanged(event: DlDateTimePickerChange<Date>) {
    this.event.endDateTime = event.value;
    if (this.event.allDayEvent) {
      this.setDurationDate();
    } else {
      this.setDurationDateTime();
    }
  }

  private setDurationDateTime() {
    if (!this.event.startDateTime || !this.event.endDateTime) {
      return;
    }

    const durationMilliseconds: number = this.event.endDateTime.valueOf() - this.event.startDateTime.valueOf();
    const millisecondsPerMinute = 1000 * 60;
    const totalDurationMinutes = durationMilliseconds / millisecondsPerMinute;
    const totalDurationHours = totalDurationMinutes / 60;
    const totalDurationDays = totalDurationHours / 24;

    const durationDays = this.getDurationDaysStr(totalDurationDays);
    const durationHours = this.getDurationHoursStr(totalDurationHours);
    const durationMinutes = this.getDurationMinutesStr(totalDurationMinutes);

    this.duration = durationDays + (durationDays && (durationHours || durationMinutes) ? ' ' : '') + durationHours + (durationDays && durationMinutes ? ' ' : '') + durationMinutes;
  }

  private setDurationDate() {
    if (!this.event.startDateTime || !this.event.endDateTime) {
      return;
    }

    const durationMilliseconds: number = this.event.endDateTime.valueOf() - this.event.startDateTime.valueOf();
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const totalDurationDays = durationMilliseconds / millisecondsPerDay;

    const durationDays = this.getDurationDaysStr(totalDurationDays, true);

    this.duration = durationDays;
  }

  private getDurationDaysStr(totalDurationDays: number, inclusive: boolean = false): string {
    let durationDays = Math.floor(totalDurationDays);
    if (inclusive) {
      durationDays += Math.sign(durationDays) ? Math.sign(durationDays) : 1;
    }
    if (durationDays === 1) { return '1 Day'; }
    return durationDays + ' Days';
  }

  private getDurationHoursStr(totalDurationHours: number) {
    const durationHours = Math.floor(totalDurationHours % 24);
    if (durationHours === 0) { return ' '; }
    if (durationHours === 1) { return '1 Hour'; }
    return durationHours + ' Hours';
  }

  private getDurationMinutesStr(totalDurationMinutes: number) {
    const durationMinutes = Math.floor(totalDurationMinutes % 60);
    if (durationMinutes === 0) { return ''; }
    if (durationMinutes === 1) { return '1 Minute'; }
    return durationMinutes + ' Minutes';
  }
}
