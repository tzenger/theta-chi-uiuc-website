export class Member {
  id?: string;

  // Personal Information
  firstName: string;
  lastName: string;
  preferredName?: string;
  middleName?: string;
  phone?: number;
  email?: string;
  birthday?: string;
  hometown?: string;

  // Chapter Information
  chapterStatus?: string;
  chapterPosition?: string;
  pledgeTerm?: string;
  pledgeClass?: string;
  initiationDate?: string;

  // School Information
  uin?: number;
  netId?: string;
  schoolEmail?: string;
  college?: string;
  major?: string;
  classStanding?: string;
  gpa?: number;
  class?: string;
  schoolStartTerm?: string;
  schoolEndTerm?: string;

  // Emergency Contact Information
  ecTitle?: string;
  ecFirstName?: string;
  ecLastName?: string;
  ecRelation?: string;
  ecPhone?: number;
  ecEmail?: string;
  ecNotes?: string;

  notes?: string;
}