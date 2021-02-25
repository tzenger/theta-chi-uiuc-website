import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/auth/user';
import { Account } from '../account/account.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

  accounts: Observable<Account[]>;

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) {

    this.accounts = this.afs.collection<User>('users').valueChanges().pipe(map(users => {

      let accounts = [];

      users.forEach(user => {
        user.memberRef.get().then(doc => {
          const acct = { user: user, member: doc.data() };
          accounts.push(acct);
        });
      });

      return accounts;
    }));
  }

  handleAccountClicked(userId: string) {
    this.router.navigate(['/p/account', userId]);
  }

}
