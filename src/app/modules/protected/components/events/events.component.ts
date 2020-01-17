import { Component, OnChanges, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TcEvent } from '../../services/event/event.model';
import { EventService } from '../../services/event/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  addEvent: TcEvent;
  events: TcEvent[];
  private eventsSubscription: Subscription;

  constructor(
    private eventService: EventService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.addEvent = new TcEvent();
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
  }
}
