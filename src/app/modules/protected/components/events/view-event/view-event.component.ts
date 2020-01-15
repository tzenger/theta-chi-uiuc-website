import { Component, OnInit, Input } from '@angular/core';
import { TcEvent } from '../../../services/event/event.model';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {

  @Input() event: TcEvent;
  
  constructor() { }

  ngOnInit() {
  }

}
