import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    this.afAuth.authState.subscribe(user => {

      if (user) {
        const usersRef = this.afs.collection('users').ref;
        console.log(user.uid)

        usersRef.where('uid', '==', user.uid).get().then((snapshot) => {
          if (snapshot.docs.length === 1) {
            this.user.next(<User>snapshot.docs[0].data());
            this.router.navigateByUrl('/p/members');
          } else {
            this.user.next(null);
          }
        });
      }
    })
  }

  signup(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth
      .signOut();
  }
}
