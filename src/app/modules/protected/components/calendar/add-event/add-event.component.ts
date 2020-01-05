import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  selectedDate: any;
  durations: number[] = [];
  categories: string[] = [];
  attendanceLevels: string[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < (24 * 4); i++) {
      this.durations.push(i * 15);
    }
    
    this.categories = [
      'Chapter',
      'Social',
      'Brotherhood',
      'Philanthropy',
      'Alumni/Parent',
      'Recruitment (public)',
      'Recruitment (private)',
      'Other'
    ];

    this.attendanceLevels = [
      'Everyone',
      'All Actives (no pledges)',
      'Live-Ins Only',
      'Pledges Only',
      'Last 2 Pledge Classes',
      'Optional'
    ]
  }
}
