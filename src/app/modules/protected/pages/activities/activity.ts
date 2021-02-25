import { DocumentReference } from '@angular/fire/firestore';

export interface Activity {
    id: string;
    title: string;
    description: string;
    type: string;
    start: string;
    end: string;
    fine: number;
}

export interface ActivityRequiredMember {
    memberRef: DocumentReference;
    status: string;
    statusTime: string;
    notes: string;
}