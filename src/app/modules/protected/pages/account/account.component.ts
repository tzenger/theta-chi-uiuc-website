import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';
import { Member } from '../../services/member/member';

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
  ) {
    this.auth.user.subscribe(user => {
      this.user = user;
      this.user.memberRef.onSnapshot(next => {
        this.member = <Member>next.data();
      });
    });
  }

  ngOnInit(): void {
  }

}
