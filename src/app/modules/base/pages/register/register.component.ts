import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member } from 'src/app/modules/protected/pages/members/member';
import { User } from 'src/app/auth/user';
import { DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';

const passwordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password1 = control.get('password1');
  const password2 = control.get('password2');

  return password1.value !== password2.value ? { 'noPasswordMatch': true } : null;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    preferredName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    middleName: new FormControl(''),
    phone: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    hometown: new FormControl('', Validators.required),

    netId: new FormControl('', Validators.required),
    uin: new FormControl('', Validators.required),

    firstSemester: new FormControl('', Validators.required),
    lastSemester: new FormControl('', Validators.required),
    college: new FormControl(''),
    major: new FormControl(''),

    ecFirstName: new FormControl('', Validators.required),
    ecLastName: new FormControl('', Validators.required),
    ecRelation: new FormControl('', Validators.required),
    ecPhone: new FormControl('', Validators.required),
    ecEmail: new FormControl(''),
    ecNotes: new FormControl(''),

    email: new FormControl('', Validators.required),
    password1: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&^().])[A-Za-z0-9@$!%*#?&^().]{8,}'),
      Validators.minLength(8)
    ]),
    password2: new FormControl('', Validators.required),
  }, { validators: passwordValidator });

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

          chapterPosition: '',
          chapterStatus: '',
          pledgeClass: '',
          pledgeTerm: '',
          initiationDate: '',
          livingIn: '',
          liveInTenure: 0,
          liveInRoomNum: '',
          liveInJob: '',

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
            role: 'basic',
            memberRef: this.afs.doc(`/members/${member.id}`).ref
          };
          console.log('Created member.', member);

          this.afs.collection('users').doc(user.id).set(user).then(() => {
            console.log('Created user.', user);
            this.auth.login(formValues.email, formValues.password1).then(() => {
              this.registerForm.reset();
              this.router.navigate(['/p/account']);
            });
          });
        });
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

}
