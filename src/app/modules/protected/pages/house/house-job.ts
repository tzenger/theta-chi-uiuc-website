import { Member } from '../members/member';
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
    statusTime: string;
    notes: string;
    job: string;
    memberRef: DocumentReference;
}