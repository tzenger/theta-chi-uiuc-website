import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from '../../../services/member/member.model';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent {
  @Output() submit: EventEmitter<Member> = new EventEmitter();

  memberForm: FormGroup = this.fb.group({
    personalInfo: this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      preferredName: ["", Validators.required],
      middleName: [""],
      phone: ["", Validators.required, Validators.pattern(/^\d+$/)],
      email: ["", Validators.required, Validators.email],
      birthday: ["", Validators.required],
      hometown: [""]
    }),

    chapterInfo: this.fb.group({
      chapterStatus: ["", Validators.required],
      chapterPosition: ["", Validators.required],
      pledgeTerm: ["", Validators.required],
      pledgeClass: ["", Validators.required],
      initiationDate: [""],
      livingIn: ["false", Validators.required],
      tuesdayHouseJob: ["false"],
      thursdayHouseJob: ["false"]
    }),

    schoolInfo: this.fb.group({
      uin: ["", Validators.required],
      netId: ["", Validators.required],
      schoolEmail: ["", Validators.required],
      college: ["", Validators.required],
      major: ["", Validators.required],
      classStanding: [""],
      gpa: [""],
      class: [""],
      schoolStartTerm: ["", Validators.required],
      schoolEndTerm: ["", Validators.required]
    }),

    ecInfo: this.fb.group({
      ecTitle: [""],
      ecFirstName: [""],
      ecLastName: [""],
      ecRelation: [""],
      ecPhone: ["", Validators.pattern(/^\d+$/)],
      ecEmail: ["", Validators.email],
      ecNotes: [""]
    }),

    notes: [""]
  });

  constructor(
    private fb: FormBuilder,
  ) {
  }

  onSubmit() {
    
    if (!this.memberForm.valid) {
      return;
    }

    const mfv = this.memberForm.value;
    const member: Member = {
      // Personal Information
      firstName: mfv.firstName,
      lastName: mfv.lastName,
      preferredName: mfv.preferredName,
      middleName: mfv.middleName,
      phone: Number.parseInt(mfv.phone),
      email: mfv.email,
      birthday: mfv.birthday,
      hometown: mfv.hometown,
    
      // Chapter Information
      chapterStatus: mfv.chapterStatus,
      chapterPosition: mfv.chapterPosition,
      pledgeTerm: mfv.pledgeTerm,
      pledgeClass: mfv.pledgeClass,
      initiationDate: mfv.initiationDate,
    
      // School Information
      uin: mfv.uin,
      netId: mfv.netId,
      schoolEmail: mfv.schoolEmail,
      college: mfv.college,
      major: mfv.major,
      classStanding: mfv.classStanding,
      class: mfv.class,
      schoolStartTerm: mfv.schoolStartTerm,
      schoolEndTerm: mfv.schoolEndTerm,
    
      // Emergency Contact Information
      ecTitle: mfv.ecTitle,
      ecFirstName: mfv.ecFirstName,
      ecLastName: mfv.ecLastName,
      ecRelation: mfv.ecRelation,
      ecPhone: Number.parseInt(mfv.ecPhone),
      ecEmail: mfv.ecEmail,
      ecNotes: mfv.ecNotes,
    
      notes: mfv.notes,
    }

    this.submit.emit(member);
  }
}
