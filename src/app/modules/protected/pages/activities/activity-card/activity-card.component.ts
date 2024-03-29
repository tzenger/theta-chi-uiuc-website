import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent implements OnInit {
  @Input()
  activity: Activity;

  constructor() { }

  ngOnInit(): void {
  }

  getDateString(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'numeric', year: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric' });
  }

}
