import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MemberService } from 'src/app/modules/protected/services/member/member.service';
import { Member } from '../../../services/member/member.model';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent {
  memberForm: FormGroup;
  members: Array<Member> = [];

  constructor(
    private formBuilder: FormBuilder,
    private memberService: MemberService
  ) {

    this.memberForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      preferredName: '',
      position: '',
      email: '',
      phone: '',
      birthday: '',
      gradYear: '',
      pledgeClass: '',
      city: '',
      state: '',
      major: '',
      minor: ''
    });
  }

  onSubmit(member: Member) {
  }
}
