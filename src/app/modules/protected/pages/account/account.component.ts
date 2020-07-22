import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';
import { Member } from '../../services/member/member';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  @Input()
  account: { user: User, member: Member };

  name: string = 'this is fake'

  user: User;
  member: Member;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore
  ) {

    this.auth.user.subscribe(user => {
      user.memberRef.onSnapshot(memberDoc => {

        this.account = {
          user: user,
          member: <Member>memberDoc.data()
        };
      });
    });
  }

  handleMemberUpdate(fieldName: string) {
    const updateField = {
      [fieldName]: this.account.member[fieldName]
    };

    this.afs.doc<Member>(`members/${this.account.member.id}`).update(updateField);
  }

}
