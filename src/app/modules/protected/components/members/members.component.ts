import { Component, OnInit } from '@angular/core';
import { Papa, ParseResult } from 'ngx-papaparse';
import { Member, MemberPledgeClass } from '../../services/member/member.model';
import { MemberService } from '../../services/member/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  pledgeMembers: Array<Member>;
  activeMembers: Array<Member>;
  alumniMembers: Array<Member>;
  otherMembers: Array<Member>;

  constructor(
    private memberService: MemberService,
    private papa: Papa
  ) { }

  ngOnInit() {
    this.getMembers();
  }

  // addBlankMember() {
  //   this.memberService.add(new Member()).then(r => this.getMembers());
  // }

  getMembers() {
    this.memberService.getAll().then(members => {
      members.sort((a, b) => a.preferredName.localeCompare(b.preferredName));

      let pledgeMembers = new Array<Member>();
      let activeMembers = new Array<Member>();
      let alumniMembers = new Array<Member>();
      let otherMembers = new Array<Member>();

      members.forEach((m) => {
        if (m.chapterStatus === 'Active') {
          if (m.chapterPosition === 'Pledge') {
            pledgeMembers.push(m);
          } else {
            activeMembers.push(m);
          }
        } else if (m.chapterStatus === 'Alumni') {
          alumniMembers.push(m);
        } else {
          otherMembers.push(m);
        }
      });

      this.pledgeMembers = pledgeMembers;
      this.activeMembers = activeMembers;
      this.alumniMembers = alumniMembers;
      this.otherMembers = otherMembers;
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
      m.uin = r[14];
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

  addMember(member: Member) {
    this.memberService.add(member);
  }

  addBlankMember() {
    const member: Member = {
      // Personal Information
      firstName: '',
      lastName: '',
      preferredName: '',
      middleName: '',
      phone: 0,
      email: '',
      birthday: '',
      hometown: '',

      // Chapter Information
      chapterStatus: 'Active',
      chapterPosition: 'Pledge',
      pledgeTerm: 'Spring 2020',
      pledgeClass: MemberPledgeClass.BETA_MU,
      initiationDate: '',
      livingIn: false,
      tuesdayHouseJob: false,
      thursdayHouseJob: false,

      // School Information
      uin: '',
      netId: '',
      schoolEmail: '',
      college: '',
      major: '',
      classStanding: '',
      gpa: 0,
      class: '',
      schoolStartTerm: '',
      schoolEndTerm: '',

      // Emergency Contact Information
      ecTitle: '',
      ecFirstName: '',
      ecLastName: '',
      ecRelation: '',
      ecPhone: 0,
      ecEmail: '',
      ecNotes: '',

      notes: '',
    };

    this.memberService.add(member);
  }
}
