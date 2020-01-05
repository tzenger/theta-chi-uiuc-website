import { Component, OnInit } from '@angular/core';
import { Member } from '../../services/member/member.model';
import { MemberService } from '../../services/member/member.service';
import { Papa, ParseResult } from 'ngx-papaparse';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Array<Member>;

  constructor(
    private memberService: MemberService,
    private papa: Papa
  ) { }

  ngOnInit() {
    this.getMembers();
  }

  addBlankMember() {
    this.memberService.add(new Member()).then(r => this.getMembers());
  }

  getMembers() {
    this.memberService.getAll().then(members => {
      members.sort((a, b) => a.preferredName.localeCompare(b.preferredName));
      this.members = members;
    });
  }

  addMembers(result: ParseResult) {
    const rows: Array<string> = result.data;
    rows.shift();
    rows.pop();

    rows.forEach(r => {
      let m = new Member();
      m.firstName = r[1];
      m.lastName = r[2];
      m.preferredName = r[3];
      m.middleName = r[4];
      m.phone = r[5] !== '' ? Number.parseInt(r[5]) : 0;
      m.email = r[6];
      m.birthday = r[7];
      m.hometown = r[8];

      // Chapter Information
      m.chapterStatus = r[9];
      m.chapterPosition = r[10];
      m.pledgeTerm = r[11];
      m.pledgeClass = r[12];
      m.initiationDate = r[13];

      // School Information
      m.uin = Number.parseInt(r[14]);
      m.netId = r[15];
      m.schoolEmail = r[16];
      m.college = r[17];
      m.major = r[18];
      m.classStanding = r[19];
      m.gpa = r[20] !== '' ? Number.parseInt(r[20]) : 0;
      m.class = r[21];
      m.schoolStartTerm = r[22];
      m.schoolEndTerm = r[23];

      // Emergency Contact Information
      m.ecTitle = r[24];
      m.ecFirstName = r[25];
      m.ecLastName = r[26];
      m.ecRelation = r[27];
      m.ecPhone = r[28] !== '' ? Number.parseInt(r[28]) : 0;
      m.ecEmail = r[29];
      m.ecNotes = r[30];

      m.notes = r[31];
      console.log(JSON.stringify(m));

      this.memberService.add(m);
    });
  }

  handleFileInput(files: FileList) {
    if (files.length != 1) {
      return;
    }
    const file = files.item(0);
    this.papa.parse(file, {
      complete: result => this.addMembers(result)
    });
  }

  delete(id: string) {
    this.memberService.remove(id).then(r => this.getMembers());
  }
}
