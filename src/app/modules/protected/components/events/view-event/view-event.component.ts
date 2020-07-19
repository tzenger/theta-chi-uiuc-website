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
    if (this.event && this.event.attendanceId) {
      console.log('Cannot delete event until attendance is deleted.')
    } else {
      this.eventService.removeEvent(this.event);
    }
  }
}
