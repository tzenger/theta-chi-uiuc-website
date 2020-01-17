import { Component, OnInit, Input } from '@angular/core';
import { TcEvent } from '../../../services/event/event.model';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { EventService } from '../../../services/event/event.service';


@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {

  @Input() event: TcEvent;

  faTrashAlt = faTrashAlt;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
  }

  deleteEvent() {
    this.eventService.removeEvent(this.event);
  }
}
