import { Component, OnInit } from '@angular/core';
import * as EventM from '../../services/event/event.model';
import { Member } from '../../services/member/member.model';
import { MemberService } from '../../services/member/member.service';

export interface MemberAttendance {
  member: Member;
  attended: boolean;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  events: EventM.Event[] = [];
  members: MemberAttendance[] = [];

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
    const event: EventM.Event = {
      title: 'Example event',
      description: '',
      startTime: '',
      endTime: ''
    };
    this.events.push(event);

    this.memberService.getAll().then(members => {
      members.sort((a, b) => a.preferredName.localeCompare(b.preferredName));
      this.members = members.map(m => {
        return {
          member: m,
          attended: false
        };
      });
    });
  }

  toggleAttendance(ma: MemberAttendance) {
    ma.attended = !ma.attended;
  }
}
