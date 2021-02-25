import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(afUser => {

        if (afUser) {
          const usersRef = this.afs.collection('users').ref;

          return usersRef.where('uid', '==', afUser.uid).get().then((snapshot) => {
            if (snapshot.docs.length === 1) {
              return <User>snapshot.docs[0].data();
            } else {
              return null;
            }
          });

        } else {
          return of(null);
        }
      })
    );
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

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
