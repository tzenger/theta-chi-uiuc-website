import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  collapse() {
    this.isExpanded = false;
  }
  
  constructor(
  ) { }

  ngOnInit() {
  }

}
