export enum MemberChapterStatus {
  ACTIVE = 'Active',
  PLEDGE = 'Pledge',
  SUSPENDED = 'Suspended',
  ALUMNI = 'Alumni'
}

export enum MemberSchoolClass {
  FRESHMAN = 'Freshman',
  SOPHOMORE = 'Sophomore',
  JUNIOR = 'Junior',
  SENIOR = 'Senior'
}

export enum MemberPledgeClass {
  BETA_LAMBDA = 'Beta Lambda',
  BETA_KAPPA = 'Beta Kappa',
  BETA_IOTA = 'Beta Iota',
  BETA_THETA = 'Beta Theta',
  BETA_ETA = 'Beta Eta',
  BETA_ZETA = 'Beta Zeta',
  BETA_EPSILON = 'Beta Epsilon',
  BETA_DELTA = 'Beta Delta',
  BETA_GAMMA = 'Beta Gamma'
}

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
  livingIn?: boolean;
  tuesdayHouseJob?: boolean;
  thursdayHouseJob?: boolean;

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