import { Component, OnInit } from '@angular/core';
import { Event } from '../../services/event/event.model';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  events: Event[];

  constructor(
    private eventService: EventService
  ) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
