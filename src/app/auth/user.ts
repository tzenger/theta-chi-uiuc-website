import { DocumentReference } from '@angular/fire/firestore';

export interface User {
    id: string;
    uid: string;
    email: string;
    role: string;
    memberRef: DocumentReference;
}