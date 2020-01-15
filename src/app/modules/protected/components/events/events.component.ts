import { Component, OnChanges, OnInit } from '@angular/core';
import { TcEvent } from '../../services/event/event.model';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnChanges {
  events: TcEvent[];
  selectedEvent: TcEvent;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  ngOnChanges() {
    console.log('Changes', this.selectedEvent);
  }

  getEvents() {
    this.eventService.getAll().then(data => {
      this.events = data;
    });
  }

  setSelectedEvent(event: TcEvent) {
    this.selectedEvent = event;
  }
}
