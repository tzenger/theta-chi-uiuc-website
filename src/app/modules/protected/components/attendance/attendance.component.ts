import { Component, OnInit } from '@angular/core';
import { Member } from '../../services/member/member.model';
import { MemberService } from '../../services/member/member.service';
import { TcEvent } from '../../services/event/event.model';

export interface MemberAttendance {
  member: Member;
  attended: boolean;
  excused: boolean;
  excuse: string;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  events: TcEvent[] = [];
  members: MemberAttendance[] = [];

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
    const event: TcEvent = {
      title: 'Example event',
      description: '',
      startDateTime: new Date('1/14/2020'),
      endDateTime: new Date('1/14/2020')
    };
    this.events.push(event);

    this.memberService.getAll().then(members => {
      members.sort((a, b) => a.lastName.localeCompare(b.lastName));
      this.members = members.map(m => {
        return {
          member: m,
          attended: false,
          excused: false,
          excuse: ''
        };
      });
    });
  }

  toggleAttendance(ma: MemberAttendance) {
    ma.attended = !ma.attended;
  }
}
