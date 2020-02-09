import { Component, OnInit, Input } from '@angular/core';
import { AttendanceService } from '../../../services/attendance/attendance.service';
import { Member } from '../../../services/member/member.model';
import { MemberService } from '../../../services/member/member.service';
import { TcEventAttendance } from '../../../services/attendance/attendance.model';

@Component({
  selector: 'app-self-checkin',
  templateUrl: './self-checkin.component.html',
  styleUrls: ['./self-checkin.component.scss']
})
export class SelfCheckinComponent implements OnInit {
  @Input() attendance: TcEventAttendance;

  uinInput: string;
  outputMessage: string;
  // people: Map<string, string>;

  constructor(
    private attendanceService: AttendanceService,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    // this.people = new Map<string, string>();
  }

  private getUinFromString(value: string): string {
    if (value.length === 9) {
      const uin = Number.parseInt(value);
      if (Number.isNaN(uin)) {
        return undefined;
      }
      return value;
    }
    const identifierIndex = value.indexOf('^CARDHOLDER/UNIVERSITY^');
    if (identifierIndex < 0 || value.length < 18 || !value.startsWith('%B') || !value.endsWith('?')) {
      return undefined;
    }
    return value.substring(6, identifierIndex - 3);
  }

  submitForm() {
    this.outputMessage = undefined;
    const uinStr = this.uinInput;
    this.uinInput = '';
    const uin = this.getUinFromString(uinStr);
    if (!uin) {
      return;
    }

    this.memberService.getByUin(Number.parseInt(uin)).then(m => {
      if (m) {
        // this.people.set(uin, m.preferredName);

        if (this.attendance) {
          for (let ma of this.attendance.members) {
            if (ma.memberId === m.id) {
              ma.attended = true;
              this.attendanceService.updateAttendance(this.attendance);
              this.outputMessage = m.preferredName + ' (member) successfully checked-in.'
              break;
            }
          }
          if (!this.outputMessage) {
            this.outputMessage = m.preferredName + ' (member) not successfully checked-in. Please talk to an exec member to manually check you in.'
          }
        }
      } else {
        // this.people.set(uin, 'Guest'); 
        this.outputMessage = 'Guest (' + uin + ') successfully checked-in. If you\'re a member, please talk to an exec member to manually check you in.'
      }
    });
  }
}
