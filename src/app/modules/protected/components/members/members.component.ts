import { Component, OnInit } from '@angular/core';
import { Member } from '../../services/member/member.model';
import { MemberService } from '../../services/member/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Array<Member>;

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.memberService.getAll().then(members => {
      this.members = members;
    });
  }
}
