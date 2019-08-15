import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../../services/member/member.model';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements OnInit {
  @Input() member: Member;

  constructor() { }

  ngOnInit() {
  }

}
