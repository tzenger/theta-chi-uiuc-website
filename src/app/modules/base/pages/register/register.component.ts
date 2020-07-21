import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member } from 'src/app/modules/protected/services/member/member';
import { User } from 'src/app/auth/user';
import { DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    preferredName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    middleName: new FormControl(''),
    phone: new FormControl(''),
    birthday: new FormControl(''),
    hometown: new FormControl(''),

    netId: new FormControl(''),
    uin: new FormControl(''),
    firstSemester: new FormControl(''),
    lastSemester: new FormControl(''),
    college: new FormControl(''),
    major: new FormControl(''),

    ecFirstName: new FormControl(''),
    ecLastName: new FormControl(''),
    ecRelation: new FormControl(''),
    ecPhone: new FormControl(''),
    ecEmail: new FormControl(''),
    ecNotes: new FormControl(''),

    email: new FormControl(''),
    password1: new FormControl(''),
    password2: new FormControl(''),
  });

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  register() {
    const formValues = this.registerForm.value;


    this.auth.signup(formValues.email, formValues.password1)
      .then(userCred => {
        console.log('Registered email.', userCred);

        const member: Member = {
          id: this.afs.createId(),
          preferredName: formValues.preferredName,
          firstName: formValues.firstName,
          middleName: formValues.middleName,
          lastName: formValues.lastName,
          phone: formValues.phone,
          email: formValues.email,
          birthday: formValues.birthday,
          hometown: formValues.hometown,

          netId: formValues.netId,
          uin: formValues.uin,
          schoolEndTerm: formValues.lastSemester,
          schoolStartTerm: formValues.firstSemester,
          college: formValues.college,
          major: formValues.major,

          ecFirstName: formValues.ecFirstName,
          ecLastName: formValues.ecLastName,
          ecRelation: formValues.ecRelation,
          ecPhone: formValues.ecPhone,
          ecEmail: formValues.ecEmail,
          ecNotes: formValues.ecNotes,
        };


        this.afs.collection('members').doc(member.id).set(member).then(() => {

          const user: User = {
            id: this.afs.createId(),
            uid: userCred.user.uid,
            email: userCred.user.email,
            role: 'exec',
            memberRef: this.afs.doc(`/members/${member.id}`).ref
          };
          console.log('Created member.', member);

          this.afs.collection('users').doc(user.id).set(user).then(() => {
            console.log('Created user.', user);
            this.auth.login(formValues.email, formValues.password1).then(() => {
              this.registerForm.reset();
              location.reload();
            });
          });
        });
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

}
