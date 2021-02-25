import { Component, OnInit, Input } from '@angular/core';
import { HouseJob } from '../house-job';

@Component({
  selector: 'app-house-job-card',
  templateUrl: './house-job-card.component.html',
  styleUrls: ['./house-job-card.component.scss']
})
export class HouseJobCardComponent implements OnInit {
  @Input()
  houseJob: HouseJob;

  constructor() { }

  ngOnInit(): void {
  }

  getDateString(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'numeric', year: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric' });
  }
}
