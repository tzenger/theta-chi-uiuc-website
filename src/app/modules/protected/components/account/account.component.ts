import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { User } from 'src/app/modules/auth/user.model';
import { Member } from '../../services/member/member.model';
import { DocumentReference } from '@angular/fire/firestore';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: User;
  member: Member;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(u => {
      this.user = u;

      this.resolveMemberInfo(u.memberRef);
    });
  }

  async resolveMemberInfo(memberRef: DocumentReference) {
    const ret = await memberRef.get();
    this.member = <Member>(ret.data());
  }
}
