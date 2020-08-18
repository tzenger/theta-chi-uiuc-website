import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';
import { Member } from '../members/member';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

export interface Account {
  user: User;
  member: Member;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  account: Account;
  loggedInUser: User;


  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private route: ActivatedRoute
  ) {
    this.auth.user.subscribe(user => {
      this.loggedInUser = user;
    });

    if (this.route.snapshot.paramMap.has('id')) {
      this.afs.doc<User>(`users/${this.route.snapshot.paramMap.get('id')}`).get().subscribe(userDoc => {
        const user = <User>userDoc.data();

        user.memberRef.onSnapshot(memberDoc => {
          this.account = {
            user: user,
            member: <Member>memberDoc.data()
          };
        });
      });
    } else {
      this.auth.user.subscribe(user => {
        user.memberRef.onSnapshot(memberDoc => {

          this.account = {
            user: user,
            member: <Member>memberDoc.data()
          };
        });
      });
    }
  }

  handleMemberUpdate(fieldName: string) {
    const updateField = {
      [fieldName]: this.account.member[fieldName]
    };

    this.afs.doc<Member>(`members/${this.account.member.id}`).update(updateField);
  }

  allowedToEdit(userId: string): boolean {
    return this.loggedInUser.role === 'admin' || this.loggedInUser.role === 'exec' || this.loggedInUser.id === userId;
  }

  allowedToEditRestricted(): boolean {
    return this.loggedInUser.role === 'admin' || this.loggedInUser.role === 'exec';
  }

  handleUserUpdate(fieldName: string) {
    const updateField = {
      [fieldName]: this.account.user[fieldName]
    };

    this.afs.doc<Member>(`users/${this.account.user.id}`).update(updateField);
  }

}
