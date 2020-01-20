import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';
import { Role } from './role.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  public async registerUser(email: string, password: string): Promise<void> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(response => {
      console.log('Successfully registered new user.');
      console.log(response);
    }).catch(message => {
      console.log('Failed to register user.');
      console.log(message);
    });
  }

  public async login(email: string, password: string): Promise<void> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(response => {
      console.log('Login successful.');
      this.updateUserData(response.user);
      this.router.navigate(['/home']);
    }).catch(message => {
      console.log('Login failed.');
      console.log(message);
    });
  }

  public async logout(): Promise<void> {
    this.afAuth.auth.signOut().then(response => {
      console.log('Signed out.')
      this.router.navigate(['/home']);
    }).catch(message => {
      console.log('Failed to sign out.');
      console.log(message);
    });
  }

  private updateUserData(user: firebase.User) {

    this.afs.collection('members').ref.where('email', '==', user.email).get().then(qs => {

      if (qs.size !== 1) {
        return;
      }

      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);


      const data = {
        id: user.uid,
        email: user.email,
        memberRef: qs.docs[0].ref,
        role: Role.ADMIN
      };

      userRef.set(data, { merge: true });
    });
  }

  public isAdmin(user: User): boolean {
    return user && user.role === Role.ADMIN;
  }
}