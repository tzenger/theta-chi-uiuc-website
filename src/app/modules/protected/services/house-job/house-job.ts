import { Member } from '../member/member';
import { DocumentReference } from '@angular/fire/firestore';

export interface HouseJob {
    id: string;
    title: string;
    start: string;
    due: string;
    fine: number;
}

export interface HouseJobRequiredMember {
    status: string;
    notes: string;
    job: string;
    member: DocumentReference;
}