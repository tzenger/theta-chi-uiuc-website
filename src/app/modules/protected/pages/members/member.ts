export interface Member {
    id: string;

    preferredName: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    phone: number
    email: string;
    birthday: string;
    hometown: string;

    chapterPosition: string;
    chapterStatus: string;
    pledgeClass: string;
    pledgeTerm: string;
    initiationDate: string;
    livingIn: string;
    liveInTenure: number;
    liveInRoomNum: string;
    liveInJob: string;

    netId: string;
    uin: string;
    schoolStartTerm: string;
    schoolEndTerm: string;
    college: string;
    gpa?: number;
    major: string;

    ecFirstName: string;
    ecLastName: string;
    ecRelation: string;
    ecPhone: number;
    ecEmail: string;
    ecNotes: string;
    
    notes?: string;
}