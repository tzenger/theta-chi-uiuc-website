import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { DlDateTimePickerChange } from 'angular-bootstrap-datetimepicker';
import { EventAttendanceLevel, EventCategory, TcEvent } from '../../../services/event/event.model';
import { EventService } from '../../../services/event/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit, OnChanges {

  @Input() eventToEdit: TcEvent;

  event = new TcEvent();

  selectedDate: any;
  duration: string = 'N/A';
  categories = Object.values(EventCategory);
  attendanceLevels = Object.values(EventAttendanceLevel);

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    if (this.eventToEdit) {
      Object.assign(this.event, this.eventToEdit);
    }
  }

  ngOnChanges() {
    if (this.eventToEdit) {
      Object.assign(this.event, this.eventToEdit);
    }
  }

  addEvent(): void {
    console.log('Submit: ', this.event);
    if (this.eventIsInvalid()) {
      console.log('Failed to add event: invalid event');
      return;
    }
    this.eventService.addEvent(this.event);
    Object.assign(this.eventToEdit, this.event);
  }

  eventIsInvalid(): boolean {
    const valid = this.event.title && (this.event.allDayEvent && !!this.event.startDate && !!this.event.endDate) || (!this.event.allDayEvent && !!this.event.startDateTime && !!this.event.endDateTime);
    return !valid;
  }

  allDayEventValueChanged(): void {
    this.event.startDateTime = undefined;
    this.event.endDateTime = undefined;
    this.event.startDate = undefined;
    this.event.endDate = undefined;
    this.duration = 'N/A';
    console.log(this.event.allDayEvent);
  }

  startDateTimeChanged(event: DlDateTimePickerChange<Date>) {
    this.event.startDateTime = event.value;
    this.setDurationDateTime();
  }

  endDateTimeChanged(event: DlDateTimePickerChange<Date>) {
    this.event.endDateTime = event.value;
    this.setDurationDateTime();
  }

  startDateChanged(event: DlDateTimePickerChange<Date>) {
    this.event.startDate = event.value;
    this.setDurationDate();
  }

  endDateChanged(event: DlDateTimePickerChange<Date>) {
    this.event.endDate = event.value;
    this.setDurationDate();
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
    if (!this.event.startDate || !this.event.endDate) {
      return;
    }

    const durationMilliseconds: number = this.event.endDate.valueOf() - this.event.startDate.valueOf();
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
